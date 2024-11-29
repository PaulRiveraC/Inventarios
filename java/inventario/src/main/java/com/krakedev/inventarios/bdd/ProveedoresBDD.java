package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.Proveedor;
import com.krakedev.inventarios.entidades.TiposDocumento;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class ProveedoresBDD {
	public ArrayList<Proveedor> buscar(String subcadena) throws KrakeDevException {
		ArrayList<Proveedor> proveedores = new ArrayList<Proveedor>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		Proveedor proveedor = null;
		try {
			con = ConexionBDD.obtenerConexion();
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement(
					"select prov.identificador, prov.tipo_documento, tdoc.descripcion, prov.nombre, prov.telefono, prov.correo, prov.direccion from proveedores prov, tipo_documento tdoc where prov.tipo_documento = tdoc.codigo_doc and upper(nombre) like ?");
			ps.setString(1, "%" + subcadena.toUpperCase() + "%");
			rs = ps.executeQuery();

			while (rs.next()) {
				String identificador = rs.getString("identificador");
				String tipo_documento = rs.getString("tipo_documento");
				String descripcion = rs.getString("descripcion");
				String nombre = rs.getString("nombre");
				String telefono = rs.getString("telefono");
				String correo = rs.getString("correo");
				String direccion = rs.getString("direccion");

				TiposDocumento tdoc = new TiposDocumento(tipo_documento, descripcion);

				proveedor = new Proveedor(identificador, tdoc, nombre, telefono, correo, direccion);
				proveedores.add(proveedor);
			}

		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar proveedor, detalle: " + e.getMessage());
		}
		return proveedores;
	}

	public void insertar(Proveedor proveedor) throws KrakeDevException {
		Connection con = null;
		PreparedStatement ps = null;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement(
					"insert into proveedores(identificador, tipo_documento, nombre, telefono, correo, direccion) values (?,?,?,?,?,?)");
			ps.setString(1, proveedor.getIdentificador());
			ps.setString(2, proveedor.getTipo_documento().getCodigo_doc());
			ps.setString(3, proveedor.getTipo_documento().getDescripcion());
			ps.setString(4, proveedor.getNombre());
			ps.setString(5, proveedor.getTelefono());
			ps.setString(6, proveedor.getCorreo());
			ps.setString(7, proveedor.getDireccion());
			ps.executeUpdate();
		} catch (SQLException e) {
			throw new KrakeDevException("Error al insertar proveedor, detalle: " + e.getMessage());
		} catch (KrakeDevException e) {
			throw e;
		} finally {
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}

}
