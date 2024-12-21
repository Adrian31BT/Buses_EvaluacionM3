package com.krakedev.buses_interprovinciales.servicios;

import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.buses_interprovinciales.bdd.BusesBDD;
import com.krakedev.buses_interprovinciales.entidades.Buses;
import com.krakedev.buses_interprovinciales.excepciones.KrakeDevException;

@Path("buses")
public class ServiciosBuses {
	@Path("obtenerBuses")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response recuperarPartidos(){
		BusesBDD busesBDD = new BusesBDD();
		ArrayList<Buses> buses = null;
		try {
			buses = busesBDD.recuperarBuses();
			return Response.ok(buses).build();
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}	
	}
}
