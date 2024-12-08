package com.krakedev.evaluacion.presistencia;

import java.sql.Connection;

import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class TestConexionBDD {

	public void probarConexion() {
		Connection con = null;
		try {
			con = ConexionBDD.obtenerConexion();
			if (con != null) {
				System.out.println("CONEXION EXITOSA");
			}
			System.out.println("ERROR AL OBTENER CONEXION");
		} catch (KrakeDevException e) {
			
			e.printStackTrace();
		}

	}

}
