package com.krakedev.buses_interprovinciales.entidades;

public class Usuarios {
	private String usu_cedula;
	private String usu_nombre;
	private String usu_correo;
	
	public Usuarios() {
		super();
	}

	public Usuarios(String usu_cedula, String usu_nombres, String usu_correo) {
		super();
		this.usu_cedula = usu_cedula;
		this.usu_nombre = usu_nombres;
		this.usu_correo = usu_correo;
	}

	public String getUsu_cedula() {
		return usu_cedula;
	}

	public void setUsu_cedula(String usu_cedula) {
		this.usu_cedula = usu_cedula;
	}

	public String getUsu_nombre() {
		return usu_nombre;
	}

	public void setUsu_nombre(String usu_nombre) {
		this.usu_nombre = usu_nombre;
	}

	public String getUsu_correo() {
		return usu_correo;
	}

	public void setUsu_correo(String usu_correo) {
		this.usu_correo = usu_correo;
	}

	@Override
	public String toString() {
		return "Usuarios [usu_cedula=" + usu_cedula + ", usu_nombres=" + usu_nombre + ", usu_correo=" + usu_correo
				+ "]";
	}
	
}
