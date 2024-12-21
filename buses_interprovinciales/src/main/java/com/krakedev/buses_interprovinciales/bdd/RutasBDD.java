package com.krakedev.buses_interprovinciales.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Time;
import java.util.ArrayList;

import com.krakedev.buses_interprovinciales.entidades.Buses;
import com.krakedev.buses_interprovinciales.entidades.Rutas;
import com.krakedev.buses_interprovinciales.excepciones.KrakeDevException;
import com.krakedev.buses_interprovinciales.utils.ConexionBDD;

public class RutasBDD {
	public ArrayList<Rutas> recuperarRutas() throws KrakeDevException{

		Connection con = null; 
		PreparedStatement ps = null;
		ResultSet rs = null;
		Rutas ruta = null;
		Buses bus = null;
		ArrayList<Rutas> rutas = new ArrayList<Rutas>();
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("select rut.rut_codigo, rut.rut_ciudadOrigen, rut.rut_ciudadDestino, rut.rut_horaSalida, rut.rut_horaLlegada, rut.bus_codigo, bus.bus_cantidad \r\n"
					+ "from rutas rut\r\n"
					+ "INNER JOIN buses bus on bus.bus_codigo = rut.bus_codigo");

			rs = ps.executeQuery();	
			
			while(rs.next()) {
				
				String rut_codigo = rs.getString("rut_codigo");
				String rut_ciudadOrigen = rs.getString("rut_ciudadOrigen");
				String rut_ciudadDestino = rs.getString("rut_ciudadDestino");
				Time rut_horaSalida = rs.getTime("rut_horaSalida");
				Time rut_horaLlegada = rs.getTime("rut_horaLlegada");
				int bus_codigo = rs.getInt("bus_codigo");
				int bus_cantidad = rs.getInt("bus_cantidad");
				
				bus = new Buses(bus_codigo, bus_cantidad);
				
				ruta = new Rutas(rut_codigo, rut_ciudadOrigen, rut_ciudadDestino, rut_horaSalida, rut_horaLlegada, bus);
				
				rutas.add(ruta);
			}
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar buses, detalle: "+e.getMessage());
		}
		
		return rutas;
	}
	
	public void insertarRuta(Rutas ruta) throws KrakeDevException {
		Connection con = null;
		PreparedStatement ps = null;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement(
					"insert into rutas (rut_codigo, rut_ciudadOrigen, rut_ciudadDestino, rut_horaSalida, rut_horaLlegada, bus_codigo) values (?, ?, ?, ?, ?, ?);");
			ps.setString(1, ruta.getRut_codigo());
			ps.setString(2, ruta.getRut_ciudadOrigen());
			ps.setString(3, ruta.getRut_ciudadDestino());
			ps.setTime(4, ruta.getRut_horaSalida());
			ps.setTime(5, ruta.getRut_horaLlegada());
			ps.setInt(6, ruta.getBus().getBus_codigo());

			ps.executeUpdate();
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al insertar la ruta, detalle: "+e.getMessage());
		}
	
	}
}
