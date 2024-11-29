package com.krakedev.inventarios.bdd;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;

import com.krakedev.inventarios.entidades.DetalleVenta;
import com.krakedev.inventarios.entidades.Venta;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class VentasBDD {
	public void insertar(Venta venta) throws KrakeDevException{
		Connection con = null; 
		PreparedStatement ps = null;
		PreparedStatement psDetalle = null;
		PreparedStatement psActualizar = null;
		PreparedStatement psHStock = null;
		ResultSet rsClave = null;
		int codigoCabecera = 0;
		//1. INSERTAR LA CABECERA DE VENTAS

		Date fechaActual = new Date();
		Timestamp fechaSQL = new Timestamp(fechaActual.getTime());
		
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("insert into cabecera_ventas(fecha, total_sin_iva, iva, total) values (?,?,?,?)", 
					Statement.RETURN_GENERATED_KEYS);
			ps.setTimestamp(1, fechaSQL);
			ps.setInt(2, 0);
			ps.setInt(3, 0);
			ps.setInt(4, 0);

			ps.executeUpdate();
			
			rsClave = ps.getGeneratedKeys();
			if(rsClave.next()){
				codigoCabecera = rsClave.getInt(1);
			}
			
			//2. POR CADA DETALLE DE VENTAS, insertar un registro en la tabla detalle_ventas:
			ArrayList<DetalleVenta> detallesVentas = venta.getDetalles();
			DetalleVenta det;
			
			BigDecimal acumSubtotal = new BigDecimal(0);
			BigDecimal acumIva = new BigDecimal(0);
			BigDecimal valor_iva = new BigDecimal(0);
			
			for(int i=0; i<detallesVentas.size(); i++) {
				det = detallesVentas.get(i);
				psDetalle = con.prepareStatement("insert into detalle_ventas(cabecera_ventas, producto, cantidad, precio_venta, subtotal, total_con_iva) values (?,?,?,?,?,?)");
				psDetalle.setInt(1, codigoCabecera);
				psDetalle.setInt(2, det.getProducto().getCodigo_pro());
				psDetalle.setInt(3, det.getCantidad());
				psDetalle.setBigDecimal(4, det.getProducto().getPrecio_venta());
				BigDecimal pv = det.getProducto().getPrecio_venta();
				BigDecimal cantidad = new BigDecimal(det.getCantidad());
				BigDecimal subtotal = pv.multiply(cantidad);
				psDetalle.setBigDecimal(5, subtotal);
				
				boolean tiene_iva = det.getProducto().isTiene_iva();
				BigDecimal iva = new BigDecimal(0.12);
				
				if(tiene_iva) {
					valor_iva = subtotal.multiply(iva);
					BigDecimal total_con_iva = subtotal.add(valor_iva);
					psDetalle.setBigDecimal(6, total_con_iva);
				}else {
					psDetalle.setBigDecimal(6, subtotal);
				}
				
				acumSubtotal = acumSubtotal.add(subtotal);
				acumIva = acumIva.add(valor_iva);
				psDetalle.executeUpdate();
				//4. REGISTRAR EL MOVIMIENTO DE STOCK

				psHStock = con.prepareStatement("insert into historial_stock (fecha, referencia, producto, cantidad) values (?, ?, ?, ?)");
				psHStock.setTimestamp(1, fechaSQL);
				String referencia = "Venta "+codigoCabecera;
				psHStock.setString(2, referencia);
				psHStock.setInt(3, det.getProducto().getCodigo_pro());
				int cantVendida = det.getCantidad() * (-1);
				psHStock.setInt(4, cantVendida);
				psHStock.executeUpdate();
			}
			
			//3. ACTUALIZAR LA CABECERA

			psActualizar = con.prepareStatement("update cabecera_ventas set total_sin_iva = ?, iva = ?, total = ? where codigo_ven = ?");
			psActualizar.setBigDecimal(1, acumSubtotal);
			psActualizar.setBigDecimal(2, acumIva);
			BigDecimal total = acumSubtotal.add(acumIva);
			psActualizar.setBigDecimal(3, total);
			psActualizar.setInt(4, codigoCabecera);
			psActualizar.executeUpdate();
			
		} catch (SQLException e) {
			throw new KrakeDevException("Error al insertar pedido, detalle: "+e.getMessage());
		} catch (KrakeDevException e) {
			throw e;
		} finally{
			if(con != null){
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}
}
