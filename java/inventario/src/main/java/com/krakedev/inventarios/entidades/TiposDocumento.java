package com.krakedev.inventarios.entidades;

public class TiposDocumento {
	private String codigo_doc;
	private String descripcion;
	
	public TiposDocumento() {
		super();
	}
	public TiposDocumento(String codigo_doc, String descripcion) {
		super();
		this.codigo_doc = codigo_doc;
		this.descripcion = descripcion;
	}
	public String getCodigo_doc() {
		return codigo_doc;
	}
	public void setCodigo_doc(String codigo_doc) {
		this.codigo_doc = codigo_doc;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	@Override
	public String toString() {
		return "TipoDocumento [codigo_doc=" + codigo_doc + ", descripcion=" + descripcion + "]";
	}
}
