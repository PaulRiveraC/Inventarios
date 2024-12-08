package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;

public class DetalleVenta {
	private int codigo_det;
	private Venta cabecera_ventas;
	private Producto producto;
	private int cantidad;
	private BigDecimal precio_venta;
	private BigDecimal subtotal;
	private BigDecimal total_con_iva;
	
	public DetalleVenta() {
		super();
	}

	public DetalleVenta(int codigo_det, Venta cabecera_ventas, Producto producto, int cantidad, BigDecimal precio_venta,
			BigDecimal subtotal, BigDecimal total_con_iva) {
		super();
		this.codigo_det = codigo_det;
		this.cabecera_ventas = cabecera_ventas;
		this.producto = producto;
		this.cantidad = cantidad;
		this.precio_venta = precio_venta;
		this.subtotal = subtotal;
		this.total_con_iva = total_con_iva;
	}

	public int getCodigo_det() {
		return codigo_det;
	}

	public void setCodigo_det(int codigo_det) {
		this.codigo_det = codigo_det;
	}

	public Venta getCabecera_ventas() {
		return cabecera_ventas;
	}

	public void setCabecera_ventas(Venta cabecera_ventas) {
		this.cabecera_ventas = cabecera_ventas;
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

	public BigDecimal getPrecio_venta() {
		return precio_venta;
	}

	public void setPrecio_venta(BigDecimal precio_venta) {
		this.precio_venta = precio_venta;
	}

	public BigDecimal getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(BigDecimal subtotal) {
		this.subtotal = subtotal;
	}

	public BigDecimal getTotal_con_iva() {
		return total_con_iva;
	}

	public void setTotal_con_iva(BigDecimal total_con_iva) {
		this.total_con_iva = total_con_iva;
	}

	@Override
	public String toString() {
		return "DetalleVenta [codigo_det=" + codigo_det + ", cabecera_ventas=" + cabecera_ventas + ", producto="
				+ producto + ", cantidad=" + cantidad + ", precio_venta=" + precio_venta + ", subtotal=" + subtotal
				+ ", total_con_iva=" + total_con_iva + "]";
	}
	
	
}
