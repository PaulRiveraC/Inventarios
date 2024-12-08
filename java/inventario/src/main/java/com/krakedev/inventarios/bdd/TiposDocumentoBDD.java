package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.TiposDocumento;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class TiposDocumentoBDD {
	public ArrayList<TiposDocumento> recuperar() throws KrakeDevException{
		ArrayList<TiposDocumento> tiposDocumentos = new ArrayList<TiposDocumento>();
		Connection con = null; 
		PreparedStatement ps = null;
		ResultSet rs = null;
		TiposDocumento documento = null;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("select * from tipo_documento");
			rs = ps.executeQuery();
			
			while(rs.next()) {
				String codigo_doc = rs.getString("codigo_doc");
				String descripcion = rs.getString("descripcion");
	
				documento = new TiposDocumento(codigo_doc, descripcion);
				tiposDocumentos.add(documento);			
			}
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar proveedor, detalle: "+e.getMessage());
		}
		
		return tiposDocumentos;
	}
}
