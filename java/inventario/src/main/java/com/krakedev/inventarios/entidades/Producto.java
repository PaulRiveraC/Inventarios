package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;

public class Producto {
	private int codigo_pro;
	private String nombre;
	private UnidadesMedida udm;
	private BigDecimal precio_venta;
	private boolean tiene_iva;
	private BigDecimal coste;
	private Categorias categoria;
	private int stock;
	public Producto() {
		super();
	}
	public Producto(int codigo_pro, String nombre, UnidadesMedida udm, BigDecimal precio_venta, boolean tiene_iva,
			BigDecimal coste, Categorias categoria, int stock) {
		super();
		this.codigo_pro = codigo_pro;
		this.nombre = nombre;
		this.udm = udm;
		this.precio_venta = precio_venta;
		this.tiene_iva = tiene_iva;
		this.coste = coste;
		this.categoria = categoria;
		this.stock = stock;
	}
	public int getCodigo_pro() {
		return codigo_pro;
	}
	public void setCodigo_pro(int codigo_pro) {
		this.codigo_pro = codigo_pro;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public UnidadesMedida getUdm() {
		return udm;
	}
	public void setUdm(UnidadesMedida udm) {
		this.udm = udm;
	}
	public BigDecimal getPrecio_venta() {
		return precio_venta;
	}
	public void setPrecio_venta(BigDecimal precio_venta) {
		this.precio_venta = precio_venta;
	}
	public boolean isTiene_iva() {
		return tiene_iva;
	}
	public void setTiene_iva(boolean tiene_iva) {
		this.tiene_iva = tiene_iva;
	}
	public BigDecimal getCoste() {
		return coste;
	}
	public void setCoste(BigDecimal coste) {
		this.coste = coste;
	}
	public Categorias getCategoria() {
		return categoria;
	}
	public void setCategoria(Categorias categoria) {
		this.categoria = categoria;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	@Override
	public String toString() {
		return "Producto [codigo_pro=" + codigo_pro + ", nombre=" + nombre + ", udm=" + udm + ", precio_venta="
				+ precio_venta + ", tiene_iva=" + tiene_iva + ", coste=" + coste + ", categoria=" + categoria
				+ ", stock=" + stock + "]";
	}
}	
