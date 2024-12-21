package com.krakedev.buses_interprovinciales.entidades;

public class Buses {
	private int bus_codigo;
	private int bus_cantidad;
	
	public Buses() {
		super();
	}
	
	public Buses(int bus_codigo, int bus_cantidad) {
		super();
		this.bus_codigo = bus_codigo;
		this.bus_cantidad = bus_cantidad;
	}

	public int getBus_codigo() {
		return bus_codigo;
	}
	public void setBus_codigo(int bus_codigo) {
		this.bus_codigo = bus_codigo;
	}
	public int getBus_cantidad() {
		return bus_cantidad;
	}
	public void setBus_cantidad(int bus_cantidad) {
		this.bus_cantidad = bus_cantidad;
	}

	@Override
	public String toString() {
		return "Buses [bus_codigo=" + bus_codigo + ", bus_cantidad=" + bus_cantidad + "]";
	}
	
}
