package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.Categorias;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class CategoriasBDD {
	
	public void insertar(Categorias categoria) throws KrakeDevException{
		Connection con = null; 
		PreparedStatement ps = null;
	
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("insert into categorias(nombre, categoria_padre) values (?,?)");
			ps.setString(1, categoria.getNombre());
			
			if(categoria.getCategoria_padre() == null){
				ps.setNull(2, java.sql.Types.NULL);
			}else {
				ps.setInt(2, categoria.getCategoria_padre().getCodigo_cat());
			}
			
			ps.executeUpdate();
		} catch (SQLException e) {
			throw new KrakeDevException("Error al insertar categoria, detalle: "+e.getMessage());
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
	
	public void actualizar(Categorias categoria) throws KrakeDevException{
		Connection con = null; 
		PreparedStatement ps = null;
	
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("update categorias set nombre = ?, categoria_padre = ? where codigo_cat = ?");
			
			ps.setString(1, categoria.getNombre());
			if(categoria.getCategoria_padre() == null){
				ps.setNull(2, java.sql.Types.NULL);
			}else {
				ps.setInt(2, categoria.getCategoria_padre().getCodigo_cat());
			}
			ps.setInt(3, categoria.getCodigo_cat());
			ps.executeUpdate();
		} catch (SQLException e) {
			throw new KrakeDevException("Error al actualizar categoria, detalle: "+e.getMessage());
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
	
	
	
	public Categorias recuperarPorCodigo(int codCat) throws KrakeDevException{

		Connection con = null; 
		PreparedStatement ps = null;
		ResultSet rs = null;
		Categorias categoria = null;
		
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("select codigo_cat, nombre, categoria_padre from categorias where codigo_cat = ?");
			ps.setInt(1, codCat);
			rs = ps.executeQuery();		
			if(rs.next()) {
				
				int codigo_cat = rs.getInt("codigo_cat");
				String nombre = rs.getString("nombre");
				Categorias categoriaPadre = null;
							
				if(rs.getObject("categoria_padre") != null) {
					int codCatPadre = rs.getInt("categoria_padre");
					categoriaPadre = recuperarPorCodigo(codCatPadre);
				}
				
				categoria = new Categorias(codigo_cat, nombre, categoriaPadre);
			}
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar categorias, detalle: "+e.getMessage());
		}
		
		return categoria;
	}
	
	public ArrayList<Categorias> recuperar() throws KrakeDevException{

		Connection con = null; 
		PreparedStatement ps = null;
		ResultSet rs = null;
		Categorias categoria = null;
		ArrayList<Categorias> categorias = new ArrayList<Categorias>();
		
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("select codigo_cat, nombre, categoria_padre from categorias");
			rs = ps.executeQuery();		
			while(rs.next()) {
				
				int codigo_cat = rs.getInt("codigo_cat");
				String nombre = rs.getString("nombre");
				Categorias categoriaPadre = null;
							
				if(rs.getObject("categoria_padre") != null) {
					int codCatPadre = rs.getInt("categoria_padre");
					categoriaPadre = recuperarPorCodigo(codCatPadre);
				}
				
				categoria = new Categorias(codigo_cat, nombre, categoriaPadre);

				categorias.add(categoria);
			}
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar categorias, detalle: "+e.getMessage());
		}
		
		return categorias;
	}
}
