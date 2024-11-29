package com.krakedev.inventarios.entidades;

public class UnidadesMedida {
	private String codigo_udm;
	private String descripcion;
	private CategoriasUnidadMedida categoria_udm;
	
	
	public UnidadesMedida() {
		super();
	}
	public UnidadesMedida(String codigo_udm, String descripcion, CategoriasUnidadMedida categoria_udm) {
		super();
		this.codigo_udm = codigo_udm;
		this.descripcion = descripcion;
		this.categoria_udm = categoria_udm;
	}
	public String getCodigo_udm() {
		return codigo_udm;
	}
	public void setCodigo_udm(String codigo_udm) {
		this.codigo_udm = codigo_udm;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public CategoriasUnidadMedida getCategoria_udm() {
		return categoria_udm;
	}
	public void setCategoria_udm(CategoriasUnidadMedida categoria_udm) {
		this.categoria_udm = categoria_udm;
	}
	@Override
	public String toString() {
		return "UnidadesMedida [codigo_udm=" + codigo_udm + ", descripcion=" + descripcion + ", categoria_udm="
				+ categoria_udm + "]";
	}
	
	
}
