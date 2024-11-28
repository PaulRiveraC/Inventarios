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
	
	public void insertar(Proveedor proveedor) throws KrakeDevException{
		Connection con = null; 
		PreparedStatement ps = null;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("insert into proveedores(identificador, tipo_documento, nombre, telefono, correo, direccion) values (?,?,?,?,?,?)");
			ps.setString(1, proveedor.getIdentificador());
			ps.setString(2, proveedor.getTipo_documento().getCodigo_doc());
			ps.setString(3, proveedor.getNombre());
			ps.setString(4, proveedor.getTelefono());
			ps.setString(5, proveedor.getCorreo());
			ps.setString(6, proveedor.getDireccion());
			ps.executeUpdate();
		} catch (SQLException e) {
			throw new KrakeDevException("Error al insertar proveedor, detalle: "+e.getMessage());
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
	
	public Proveedor buscarPorIdentificador(String identi) throws KrakeDevException{
		Connection con = null; 
		PreparedStatement ps = null;
		ResultSet rs = null;
		Proveedor proveedor = null;
		TiposDocumento tiposDocumento = null;
		ResultSet rs2 = null;
		PreparedStatement ps2 = null;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("select * from proveedores where identificador = ?");
			ps.setString(1, identi);
			rs = ps.executeQuery();
			
			if(rs.next()) {
				String identificador = rs.getString("identificador");
				String nombre = rs.getString("nombre");
				String tipo_documento = rs.getString("tipo_documento");
				
				ps2 = con.prepareStatement("select * from tipo_documento where codigo_doc = ?");
				ps2.setString(1, tipo_documento);
				rs2 = ps2.executeQuery();
				if(rs2.next()) {
					String codigo_doc = rs2.getString("codigo_doc");
					String descripcion = rs2.getString("descripcion");
					
					tiposDocumento = new TiposDocumento(codigo_doc, descripcion);	
				}
				
				String telefono = rs.getString("telefono");
				String correo = rs.getString("correo");
				String direccion = rs.getString("direccion");
				
				proveedor = new Proveedor(identificador, tiposDocumento, nombre, telefono, correo, direccion);		
			}
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar proveedor por identificador, detalle: "+e.getMessage());
		}
		
		return proveedor;
	}
}
