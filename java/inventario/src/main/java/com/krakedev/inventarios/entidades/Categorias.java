package com.krakedev.inventarios.entidades;

public class Categorias {
	private int codigo_cat;
	private String nombre;
	private Categorias categoria_padre;
	
	
	public Categorias() {
		super();
	}
	
	public Categorias(int codigo_cat, String nombre, Categorias categoria_padre) {
		super();
		this.codigo_cat = codigo_cat;
		this.nombre = nombre;
		this.categoria_padre = categoria_padre;
	}
	public int getCodigo_cat() {
		return codigo_cat;
	}
	public void setCodigo_cat(int codigo_cat) {
		this.codigo_cat = codigo_cat;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public Categorias getCategoria_padre() {
		return categoria_padre;
	}
	public void setCategoria_padre(Categorias categoria_padre) {
		this.categoria_padre = categoria_padre;
	}
	@Override
	public String toString() {
		return "Categorias [codigo_cat=" + codigo_cat + ", nombre=" + nombre + ", categoria_padre=" + categoria_padre
				+ "]";
	}
}
