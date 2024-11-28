package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.ArrayList;

public class Venta {
	private int codigo_ven;
	private Timestamp fecha;
	private BigDecimal total_sin_iva;
	private BigDecimal iva;
	private BigDecimal total;
	
	private ArrayList<DetalleVenta> detalles;
	
	public Venta() {
		super();
	}
	public Venta(int codigo_ven, Timestamp fecha, BigDecimal total_sin_iva, BigDecimal iva, BigDecimal total) {
		super();
		this.codigo_ven = codigo_ven;
		this.fecha = fecha;
		this.total_sin_iva = total_sin_iva;
		this.iva = iva;
		this.total = total;
	}
	public int getCodigo_ven() {
		return codigo_ven;
	}
	public void setCodigo_ven(int codigo_ven) {
		this.codigo_ven = codigo_ven;
	}
	public Timestamp getFecha() {
		return fecha;
	}
	public void setFecha(Timestamp fecha) {
		this.fecha = fecha;
	}
	public BigDecimal getTotal_sin_iva() {
		return total_sin_iva;
	}
	public void setTotal_sin_iva(BigDecimal total_sin_iva) {
		this.total_sin_iva = total_sin_iva;
	}
	public BigDecimal getIva() {
		return iva;
	}
	public void setIva(BigDecimal iva) {
		this.iva = iva;
	}
	public BigDecimal getTotal() {
		return total;
	}
	public void setTotal(BigDecimal total) {
		this.total = total;
	}
	
	public ArrayList<DetalleVenta> getDetalles() {
		return detalles;
	}
	public void setDetalles(ArrayList<DetalleVenta> detalles) {
		this.detalles = detalles;
	}
	@Override
	public String toString() {
		return "Venta [codigo_ven=" + codigo_ven + ", fecha=" + fecha + ", total_sin_iva=" + total_sin_iva + ", iva="
				+ iva + ", total=" + total + "]";
	}
	
	
}
