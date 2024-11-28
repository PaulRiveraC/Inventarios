package com.krakedev.inventarios.servicios;

import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.ProveedoresBDD;
import com.krakedev.inventarios.entidades.Proveedor;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;



@Path("proveedores")
public class ServiciosProveedores {
	// probando conecxion en posmant
	@Path("probar")
	@GET
	public String saludar() {
		return "Hola conectar";
	}
	
	// probando conexion con bdd
	@Path("conectar")
	@POST
	public void probarConn() {
		try {
			ConexionBDD.obtenerConexion();
		} catch (KrakeDevException e) {

			e.printStackTrace();
		}
	}
	
	@Path("buscar/{sub}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscar(@PathParam("sub") String subcadena){
		ProveedoresBDD proveedoresBDD = new ProveedoresBDD();
		ArrayList<Proveedor> proveedores = null;
		try {
			proveedores = proveedoresBDD.buscar(subcadena);
			return Response.ok(proveedores).build();
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}	
	}
	
}
