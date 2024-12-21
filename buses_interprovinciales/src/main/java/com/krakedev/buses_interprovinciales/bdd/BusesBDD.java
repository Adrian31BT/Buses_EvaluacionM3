package com.krakedev.buses_interprovinciales.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.buses_interprovinciales.entidades.Buses;
import com.krakedev.buses_interprovinciales.excepciones.KrakeDevException;
import com.krakedev.buses_interprovinciales.utils.ConexionBDD;

public class BusesBDD {
	
	public ArrayList<Buses> recuperarBuses() throws KrakeDevException{

		Connection con = null; 
		PreparedStatement ps = null;
		ResultSet rs = null;
		Buses bus = null;
		ArrayList<Buses> buses = new ArrayList<Buses>();
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("select bus_codigo, bus_cantidad from buses");

			rs = ps.executeQuery();		
			while(rs.next()) {
				
				int bus_codigo = rs.getInt("bus_codigo");
				int bus_cantidad = rs.getInt("bus_cantidad");
				
				bus = new Buses(bus_codigo, bus_cantidad);
				
				buses.add(bus);
			}
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar buses, detalle: "+e.getMessage());
		}
		
		return buses;
	}
	
	public void insertar(Buses bus) throws KrakeDevException{
		Connection con=null;
		PreparedStatement ps=null;
		try {
			con=ConexionBDD.obtenerConexion();
			ps=con.prepareStatement("insert into buses (bus_codigo, bus_cantidad) "
					+ "values (?, ?);");
			ps.setInt(1, bus.getBus_codigo());
			ps.setInt(2, bus.getBus_cantidad());

			ps.executeUpdate();
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al insertar el nuevo bus. Detalle: "+e.getMessage());
		}
	}
	
	
}
