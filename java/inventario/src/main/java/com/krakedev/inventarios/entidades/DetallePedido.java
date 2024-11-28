package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;

public class DetallePedido {
	private int codigo_dp;
	private Pedido pedido;
	private Producto producto;
	private int cantidad_solicitada;
	private BigDecimal subtotal;
	private int cantidad_recibida;
	
	public DetallePedido() {
		super();
	}
	public DetallePedido(int codigo_dp, Pedido pedido, Producto producto, int cantidad_solicitada, BigDecimal subtotal,
			int cantidad_recibida) {
		super();
		this.codigo_dp = codigo_dp;
		this.pedido = pedido;
		this.producto = producto;
		this.cantidad_solicitada = cantidad_solicitada;
		this.subtotal = subtotal;
		this.cantidad_recibida = cantidad_recibida;
	}
	public int getCodigo_dp() {
		return codigo_dp;
	}
	public void setCodigo_dp(int codigo_dp) {
		this.codigo_dp = codigo_dp;
	}
	public Pedido getPedido() {
		return pedido;
	}
	public void setPedido(Pedido pedido) {
		this.pedido = pedido;
	}
	public Producto getProducto() {
		return producto;
	}
	public void setProducto(Producto producto) {
		this.producto = producto;
	}
	public int getCantidad_solicitada() {
		return cantidad_solicitada;
	}
	public void setCantidad_solicitada(int cantidad_solicitada) {
		this.cantidad_solicitada = cantidad_solicitada;
	}
	public BigDecimal getSubtotal() {
		return subtotal;
	}
	public void setSubtotal(BigDecimal subtotal) {
		this.subtotal = subtotal;
	}
	public int getCantidad_recibida() {
		return cantidad_recibida;
	}
	public void setCantidad_recibida(int cantidad_recibida) {
		this.cantidad_recibida = cantidad_recibida;
	}
	@Override
	public String toString() {
		return "DetallePedido [codigo_dp=" + codigo_dp + ", pedido=" + pedido + ", producto=" + producto
				+ ", cantidad_solicitada=" + cantidad_solicitada + ", subtotal=" + subtotal + ", cantidad_recibida="
				+ cantidad_recibida + "]";
	}
	
	
}
