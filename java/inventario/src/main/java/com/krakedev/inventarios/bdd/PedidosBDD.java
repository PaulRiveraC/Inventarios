package com.krakedev.inventarios.bdd;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;

import com.krakedev.inventarios.entidades.DetallePedido;
import com.krakedev.inventarios.entidades.Pedido;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;


public class PedidosBDD {
	public void insertar(Pedido pedido) throws KrakeDevException{
		Connection con = null; 
		PreparedStatement ps = null;
		PreparedStatement psDetalle = null;
		ResultSet rsClave = null;
		int codigoCabecera = 0;
		
		Date fechaActual = new Date();
		java.sql.Date fechaSQL = new java.sql.Date(fechaActual.getTime());
		
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("insert into cabecera_pedido(proveedor, fecha, estado) values (?,?,?)", Statement.RETURN_GENERATED_KEYS);
			ps.setString(1, pedido.getProveedor().getIdentificador());
			ps.setDate(2, fechaSQL);
			ps.setString(3, "S");

			ps.executeUpdate();
			
			rsClave = ps.getGeneratedKeys();
			if(rsClave.next()){
				codigoCabecera = rsClave.getInt(1);
			}
			
			System.out.println("CODIGO GENERADO>>>"+codigoCabecera);
			
			ArrayList<DetallePedido> detallesPedidos = pedido.getDetalles();
			DetallePedido det;
			
			for(int i=0; i<detallesPedidos.size(); i++) {
				det = detallesPedidos.get(i);
				psDetalle = con.prepareStatement("insert into detalle_pedido(cabecera_pedido, producto, cantidad_solicitada, subtotal, cantidad_recibida) values (?,?,?,?,?)");
				psDetalle.setInt(1, codigoCabecera);
				psDetalle.setInt(2, det.getProducto().getCodigo_pro());
				psDetalle.setInt(3, det.getCantidad_solicitada());
				BigDecimal pv = det.getProducto().getPrecio_venta();
				BigDecimal cantidad = new BigDecimal(det.getCantidad_solicitada());
				BigDecimal subtotal = pv.multiply(cantidad);
				psDetalle.setBigDecimal(4, subtotal);
				psDetalle.setInt(5, 0);
				
				psDetalle.executeUpdate();
			}
			
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