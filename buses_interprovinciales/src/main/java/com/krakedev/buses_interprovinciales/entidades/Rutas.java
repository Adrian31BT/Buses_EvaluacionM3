package com.krakedev.buses_interprovinciales.entidades;

import java.sql.Time;

public class Rutas {
	private String rut_codigo;
	private String rut_ciudadOrigen;
	private String rut_ciudadDestino;
	private Time rut_horaSalida;
	private Time rut_horaLlegada;
	private Buses bus;
	
	public Rutas() {
		super();
	}

	public Rutas(String rut_codigo, String rut_ciudadOrigen, String rut_ciudadDestino, Time rut_horaSalida,
			Time rut_horaLlegada, Buses bus) {
		super();
		this.rut_codigo = rut_codigo;
		this.rut_ciudadOrigen = rut_ciudadOrigen;
		this.rut_ciudadDestino = rut_ciudadDestino;
		this.rut_horaSalida = rut_horaSalida;
		this.rut_horaLlegada = rut_horaLlegada;
		this.bus = bus;
	}

	public String getRut_codigo() {
		return rut_codigo;
	}

	public void setRut_codigo(String rut_codigo) {
		this.rut_codigo = rut_codigo;
	}

	public String getRut_ciudadOrigen() {
		return rut_ciudadOrigen;
	}

	public void setRut_ciudadOrigen(String rut_ciudadOrigen) {
		this.rut_ciudadOrigen = rut_ciudadOrigen;
	}

	public String getRut_ciudadDestino() {
		return rut_ciudadDestino;
	}

	public void setRut_ciudadDestino(String rut_ciudadDestino) {
		this.rut_ciudadDestino = rut_ciudadDestino;
	}

	public Time getRut_horaSalida() {
		return rut_horaSalida;
	}

	public void setRut_horaSalida(Time rut_horaSalida) {
		this.rut_horaSalida = rut_horaSalida;
	}

	public Time getRut_horaLlegada() {
		return rut_horaLlegada;
	}

	public void setRut_horaLlegada(Time rut_horaLlegada) {
		this.rut_horaLlegada = rut_horaLlegada;
	}

	public Buses getBus() {
		return bus;
	}

	public void setBus(Buses bus) {
		this.bus = bus;
	}

	@Override
	public String toString() {
		return "Rutas [rut_codigo=" + rut_codigo + ", rut_ciudadOrigen=" + rut_ciudadOrigen + ", rut_ciudadDestino="
				+ rut_ciudadDestino + ", rut_horaSalida=" + rut_horaSalida + ", rut_horaLlegada=" + rut_horaLlegada
				+ ", bus=" + bus + "]";
	}
	
}

