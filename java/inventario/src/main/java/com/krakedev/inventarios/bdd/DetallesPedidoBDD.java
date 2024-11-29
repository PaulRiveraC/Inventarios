package com.krakedev.inventarios.bdd;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.DetallePedido;
import com.krakedev.inventarios.entidades.Producto;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class DetallesPedidoBDD {
	public ArrayList<DetallePedido> buscarPorCabecera(int CodPedido) throws KrakeDevException {
		ArrayList<DetallePedido> detallesPedidos = new ArrayList<DetallePedido>();
		
		Connection con = null;
		DetallePedido detalle = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		Producto producto = null;
		
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("select codigo_dp, producto, cantidad_solicitada, cast(subtotal as decimal(6,2)), cantidad_recibida from detalle_pedido where cabecera_pedido = ?");
			ps.setInt(1, CodPedido);
			rs = ps.executeQuery();

			while (rs.next()) {
				
				int codigo_dp = rs.getInt("codigo_dp");
				int Codproducto = rs.getInt("producto");
				
				ProductosBDD productosBDD = new ProductosBDD();
				producto = productosBDD.buscarPorCodigo(Codproducto);
				
				
				int cantidad_solicitada = rs.getInt("cantidad_solicitada");
				BigDecimal subtotal = rs.getBigDecimal("subtotal");
				int cantidad_recibida = rs.getInt("cantidad_recibida");
				
				detalle = new DetallePedido();
				detalle.setCodigo_dp(codigo_dp);
				detalle.setProducto(producto);
				detalle.setCantidad_solicitada(cantidad_solicitada);
				detalle.setSubtotal(subtotal);
				detalle.setCantidad_recibida(cantidad_recibida);
				
				detallesPedidos.add(detalle);
			}

		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar detalles de pedido, detalle: " + e.getMessage());
		}
		return detallesPedidos;
		
	}
}
