package com.krakedev.buses_interprovinciales.servicios;

import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.buses_interprovinciales.bdd.RutasBDD;
import com.krakedev.buses_interprovinciales.entidades.Rutas;
import com.krakedev.buses_interprovinciales.excepciones.KrakeDevException;

@Path("rutas")
public class ServiciosRutas {
	@Path("obtenerRutas")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response recuperarPartidos(){
		RutasBDD rutasBDD = new RutasBDD();
		ArrayList<Rutas> rutas = null;
		try {
			rutas = rutasBDD.recuperarRutas();
			return Response.ok(rutas).build();
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}	
	}
}
