package com.krakedev.inventarios.entidades;

public class EstadoPedido {
	private String codigo_est;
	private String descripcion;
	
	public EstadoPedido() {
		super();
	}
	public EstadoPedido(String codigo_est, String descripcion) {
		super();
		this.codigo_est = codigo_est;
		this.descripcion = descripcion;
	}
	public String getCodigo_est() {
		return codigo_est;
	}
	public void setCodigo_est(String codigo_est) {
		this.codigo_est = codigo_est;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	@Override
	public String toString() {
		return "EstadoPedido [codigo_est=" + codigo_est + ", descripcion=" + descripcion + "]";
	}
	
}
