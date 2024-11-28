package com.krakedev.inventarios.servicios;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
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

@Path("proveedores")
public class ServiciosProveedores {
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
	
	@Path("crear")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response crear(Proveedor proveedor) {
		ProveedoresBDD proveedoresBDD = new ProveedoresBDD();
		try {
			proveedoresBDD.insertar(proveedor);
			return Response.ok().build();
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	@Path("buscarPorIdentificador/{identificador}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarPorIdentificador(@PathParam("identificador") String identificador){
		ProveedoresBDD proveedoresBDD = new ProveedoresBDD();
		Proveedor proveedores = null;
		try {
			proveedores = proveedoresBDD.buscarPorIdentificador(identificador);
			return Response.ok(proveedores).build();
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}	
	}
}
