package com.krakedev.inventarios.entidades;

import java.util.ArrayList;
import java.util.Date;

public class Pedido {
	private int numero_cab;
	private Proveedor proveedor;
	private Date fecha;
	private EstadoPedido estado;
	
	private ArrayList<DetallePedido> detalles;
	
	public Pedido() {
		super();
	}
	public Pedido(int numero_cab, Proveedor proveedor, Date fecha, EstadoPedido estado) {
		super();
		this.numero_cab = numero_cab;
		this.proveedor = proveedor;
		this.fecha = fecha;
		this.estado = estado;
	}
	public int getNumero_cab() {
		return numero_cab;
	}
	public void setNumero_cab(int numero_cab) {
		this.numero_cab = numero_cab;
	}
	public Proveedor getProveedor() {
		return proveedor;
	}
	public void setProveedor(Proveedor proveedor) {
		this.proveedor = proveedor;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	public EstadoPedido getEstado() {
		return estado;
	}
	public void setEstado(EstadoPedido estado) {
		this.estado = estado;
	}
	
	public ArrayList<DetallePedido> getDetalles() {
		return detalles;
	}
	public void setDetalles(ArrayList<DetallePedido> detalles) {
		this.detalles = detalles;
	}
	@Override
	public String toString() {
		return "Pedido [numero_cab=" + numero_cab + ", proveedor=" + proveedor + ", fecha=" + fecha + ", estado="
				+ estado + "]";
	}
	
}
