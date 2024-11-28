package com.krakedev.inventarios.servicios;

import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.TiposDocumentoBDD;
import com.krakedev.inventarios.entidades.TiposDocumento;
import com.krakedev.inventarios.excepciones.KrakeDevException;


@Path("tiposdocumento")
public class ServiciosTiposDocumento {
	@Path("recuperar")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response recuperar(){
		TiposDocumentoBDD tiposDocumentoBDD = new TiposDocumentoBDD();
		ArrayList<TiposDocumento> TiposDocumentos = null;
		
		try {
			TiposDocumentos = tiposDocumentoBDD.recuperar();
			return Response.ok(TiposDocumentos).build();
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}	
	}
}
