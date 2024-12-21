package com.krakedev.buses_interprovinciales.entidades;

import java.util.Date;

public class Reservas {
	private int res_codigo;
	private Usuarios usuario;
	private Rutas ruta;
	private Date res_fecha;
	private int res_asiento;
	
	public Reservas() {
		super();
	}

	public Reservas(int res_codigo, Usuarios usuario, Rutas ruta, Date res_fecha, int res_asiento) {
		super();
		this.res_codigo = res_codigo;
		this.usuario = usuario;
		this.ruta = ruta;
		this.res_fecha = res_fecha;
		this.res_asiento = res_asiento;
	}

	public int getRes_codigo() {
		return res_codigo;
	}

	public void setRes_codigo(int res_codigo) {
		this.res_codigo = res_codigo;
	}

	public Usuarios getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuarios usuario) {
		this.usuario = usuario;
	}

	public Rutas getRuta() {
		return ruta;
	}

	public void setRuta(Rutas ruta) {
		this.ruta = ruta;
	}

	public Date getRes_fecha() {
		return res_fecha;
	}

	public void setRes_fecha(Date res_fecha) {
		this.res_fecha = res_fecha;
	}

	public int getRes_asiento() {
		return res_asiento;
	}

	public void setRes_asiento(int res_asiento) {
		this.res_asiento = res_asiento;
	}

	@Override
	public String toString() {
		return "Reservas [res_codigo=" + res_codigo + ", usuario=" + usuario + ", ruta=" + ruta + ", res_fecha="
				+ res_fecha + ", res_asiento=" + res_asiento + "]";
	}

}
