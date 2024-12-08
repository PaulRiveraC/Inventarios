package com.krakedev.inventarios.entidades;

import java.util.Date;

public class HistorialStock {
	private int codigo_his;
	private Date fecha;
	private String referencia;
	private Producto producto;
	private int cantidad;
	
	
	public HistorialStock() {
		super();
	}


	public HistorialStock(int codigo_his, Date fecha, String referencia, Producto producto, int cantidad) {
		super();
		this.codigo_his = codigo_his;
		this.fecha = fecha;
		this.referencia = referencia;
		this.producto = producto;
		this.cantidad = cantidad;
	}


	public int getCodigo_his() {
		return codigo_his;
	}


	public void setCodigo_his(int codigo_his) {
		this.codigo_his = codigo_his;
	}


	public Date getFecha() {
		return fecha;
	}


	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}


	public String getReferencia() {
		return referencia;
	}


	public void setReferencia(String referencia) {
		this.referencia = referencia;
	}


	public Producto getProducto() {
		return producto;
	}


	public void setProducto(Producto producto) {
		this.producto = producto;
	}


	public int getCantidad() {
		return cantidad;
	}


	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}


	@Override
	public String toString() {
		return "HistorialStock [codigo_his=" + codigo_his + ", fecha=" + fecha + ", referencia=" + referencia
				+ ", producto=" + producto + ", cantidad=" + cantidad + "]";
	}
	
	
}
