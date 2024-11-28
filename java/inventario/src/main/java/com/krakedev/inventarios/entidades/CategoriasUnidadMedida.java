package com.krakedev.inventarios.entidades;

public class CategoriasUnidadMedida {
	private String codigo_cudm;
	private String nombre;
	
	public CategoriasUnidadMedida() {
		super();
	}
	public CategoriasUnidadMedida(String codigo_cudm, String nombre) {
		super();
		this.codigo_cudm = codigo_cudm;
		this.nombre = nombre;
	}
	public String getCodigo_cudm() {
		return codigo_cudm;
	}
	public void setCodigo_cudm(String codigo_cudm) {
		this.codigo_cudm = codigo_cudm;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	@Override
	public String toString() {
		return "CategoriasUnidadMedida [codigo_cudm=" + codigo_cudm + ", nombre=" + nombre + "]";
	}
}
