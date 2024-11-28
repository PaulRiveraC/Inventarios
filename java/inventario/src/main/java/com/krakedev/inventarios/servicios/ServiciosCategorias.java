package com.krakedev.inventarios.servicios;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.CategoriasBDD;
import com.krakedev.inventarios.entidades.Categorias;
import com.krakedev.inventarios.excepciones.KrakeDevException;


@Path("categorias")
public class ServiciosCategorias {
	@Path("crear")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response crear(Categorias categoria) {
		CategoriasBDD categoriasBDD = new CategoriasBDD();
		try {
			categoriasBDD.insertar(categoria);
			return Response.ok().build();
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	@Path("actualizar")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response actualizar(Categorias categoria) {
		CategoriasBDD categoriasBDD = new CategoriasBDD();
		try {
			categoriasBDD.actualizar(categoria);
			return Response.ok().build();
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	@Path("recuperar")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response recuperar(){
		CategoriasBDD categoriasBDD = new CategoriasBDD();
		ArrayList<Categorias> categorias = null;
		
		try {
			categorias = categoriasBDD.recuperar();
			return Response.ok(categorias).build();
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}	
	}
	
	@Path("recuperarPorCodigo/{codCat}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response recuperarPorCodigo(@PathParam("codCat") int codCat){
		CategoriasBDD categoriasBDD = new CategoriasBDD();
		Categorias categorias = null;
		
		try {
			categorias = categoriasBDD.recuperarPorCodigo(codCat);
			return Response.ok(categorias).build();
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}	
	}
}
