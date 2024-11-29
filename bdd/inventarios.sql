
drop table if exists historial_stock;

drop table if exists detalle_ventas;
drop table if exists cabecera_ventas;

drop table if exists detalle_pedido;
drop table if exists cabecera_pedido;
drop table if exists proveedores;
drop table if exists tipo_documento;
drop table if exists estados_pedido;

drop table if exists productos;
drop table if exists categorias;
drop table if exists unidades_medida;
drop table if exists categorias_unidad_medida;


create table categorias(
	codigo_cat serial not null,
	nombre varchar(100) not null,
	categoria_padre int,
	constraint categorias_pk primary key (codigo_cat),
	constraint categorias_fk foreign key (categoria_padre) 
	references categorias(codigo_cat) 
);

insert into categorias (nombre, categoria_padre) 
values('Materia prima', null);
insert into categorias (nombre, categoria_padre) 
values('Proteina', 1);
insert into categorias (nombre, categoria_padre) 
values('Salsas', 1);
insert into categorias (nombre, categoria_padre) 
values('Punto de venta', null);
insert into categorias (nombre, categoria_padre) 
values('Bebidas', 4);
insert into categorias (nombre, categoria_padre) 
values('Con alcohol', 5);
insert into categorias (nombre, categoria_padre) 
values('Sin alcohol', 5);




create table categorias_unidad_medida(
	codigo_cudm  char(1) not null,
	nombre varchar(50) not null,
	constraint categorias_unidad_medida_pk primary key (codigo_cudm )
);

insert into categorias_unidad_medida (codigo_cudm , nombre) 
values('U', 'Unidades');
insert into categorias_unidad_medida (codigo_cudm , nombre) 
values('V', 'Volumen');
insert into categorias_unidad_medida (codigo_cudm , nombre) 
values('P', 'Peso');

create table unidades_medida(
	codigo_udm char(2) not null,
	descripcion varchar(50) not null,
	categoria_udm char(1) not null,
	constraint unidades_medida_pk primary key (codigo_udm),
	constraint categoria_udm_fk foreign key (categoria_udm) 
	references categorias_unidad_medida(codigo_cudm)
);

insert into unidades_medida (codigo_udm , descripcion, categoria_udm) 
values('ml', 'mililitros','V');
insert into unidades_medida (codigo_udm , descripcion, categoria_udm) 
values('l', 'litros','V');
insert into unidades_medida (codigo_udm , descripcion, categoria_udm)
values('u', 'unidad','U');
insert into unidades_medida (codigo_udm , descripcion, categoria_udm)
values('d', 'docena','U');
insert into unidades_medida (codigo_udm , descripcion, categoria_udm) 
values('g', 'gramos','P');
insert into unidades_medida (codigo_udm , descripcion, categoria_udm) 
values('kg', 'kilogramos','P');
insert into unidades_medida (codigo_udm , descripcion, categoria_udm)
values('lb', 'libras','P');

create table productos(
	codigo_pro serial not null,
	nombre varchar(100) not null,
	udm char(2) not null,
	precio_venta money not null,
	tiene_iva boolean not null,
	coste money not null,
	categoria int not null,
	stock int not null,
	constraint productos_pk primary key (codigo_pro),
	constraint udm_fk foreign key (udm) 
	references unidades_medida(codigo_udm),
	constraint categoria_fk foreign key (categoria) 
	references categorias(codigo_cat)
);


insert into productos (nombre , udm, precio_venta, tiene_iva, coste, categoria, stock) 
values('Coca cola pequeña', 'ml', 0.5804, true, 0.3729, 7, 100),
('Salsa de tomate', 'kg', 0.95, true, 0.8736, 3, 0),
('Mostaza', 'kg', 0.95, true, 0.89, 3, 0),
('Fuze tea', 'u', 0.8, true, 0.7, 7, 50);

create table tipo_documento(
	codigo_doc char(1) not null,
	descripcion varchar(20) not null,
	constraint tipo_documento_pk primary key (codigo_doc)
);

insert into tipo_documento (codigo_doc , descripcion)
values('C', 'Cedula');
insert into tipo_documento (codigo_doc , descripcion) 
values('R', 'Ruc');

create table proveedores(
	identificador varchar(13) not null,
	tipo_documento char(1) not null,
	nombre varchar(100) not null,
	telefono varchar(10) not null,
	correo varchar(100) not null,
	direccion varchar(100) not null,
	constraint proveedores_pk primary key (identificador),
	constraint tipo_documento_fk foreign key (tipo_documento) 
	references tipo_documento(codigo_doc)
);

insert into proveedores (identificador , tipo_documento, nombre, telefono, correo, direccion) 
values ('1792285747', 'C', 'Santiago Mosquera', 0992920306, 'santiago@gmail.com', 'Cumbayork'),
('1792285747001', 'R', 'Santiago S.A', 0992920398, 'santsnack@gmail.com', 'La Tola');



create table estados_pedido(
	codigo_est char(1) not null,
	descripcion varchar(20) not null,
	constraint estados_pedido_pk primary key (codigo_est)
);

insert into estados_pedido (codigo_est , descripcion) 
values('S', 'Solicitado');
insert into estados_pedido (codigo_est , descripcion) 
values('R', 'Recibido');

create table cabecera_pedido(
	numero_cab serial not null,
	proveedor varchar(13) not null,
	fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	estado char(1) not null,
	constraint cabecera_pedido_pk primary key (numero_cab),
	constraint proveedor_fk foreign key (proveedor) references proveedores(identificador),
	constraint estado_fk foreign key (estado) references estados_pedido(codigo_est)
);

insert into cabecera_pedido (proveedor, estado) 
values('1792285747','R'),
('1792285747','R');

create table detalle_pedido(
	codigo_dp serial not null,
	cabecera_pedido int not null,
	producto int not null,
	cantidad_solicitada int not null,
	subtotal money not null,
	cantidad_recibida int not null,
	constraint detalle_pedido_pk primary key (codigo_dp),
	constraint cabecera_pedido_fk foreign key (cabecera_pedido) references cabecera_pedido(numero_cab),
	constraint producto_fk foreign key (producto) references productos(codigo_pro)
);

insert into detalle_pedido 
(cabecera_pedido, producto, cantidad_solicitada, subtotal, cantidad_recibida)
values (1, 1, 100, 37.29, 100),
(1, 4, 50, 11.8, 50),
(2, 1, 10, 3.73, 10);

create table historial_stock(
	codigo_his serial not null,
	fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	referencia varchar(100) not null,
	producto serial not null,
	cantidad int not null,
	constraint historial_stock_pk primary key (codigo_his),
	constraint producto_fk foreign key (producto) references productos(codigo_pro)
);


insert into historial_stock ( referencia, producto, cantidad) 
values ( 'Pedido 1', 1, 100),
( 'Pedido 1', 4, 50),
( 'Pedido 2', 1, 10),
( 'Venta 1', 1, -5),
('Venta 1', 4, 1);

create table cabecera_ventas(
	codigo_ven serial not null,
	fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	total_sin_iva money not null,
	iva money not null,
	total money not null,
	constraint cabecera_ventas_pk primary key (codigo_ven)
);

insert into cabecera_ventas (total_sin_iva, iva, total) 
values( 3.26, 0.39, 3.65);

create table detalle_ventas(
	codigo_det serial not null,
	cabecera_ventas int not null,
	producto int not null,
	cantidad int not null,
	precio_venta money not null,
	subtotal money not null,
	total_con_iva money not null,
	constraint detalle_ventas_pk primary key (codigo_det),
	constraint producto_fk foreign key (producto) references productos(codigo_pro),
	constraint cabecera_ventas_fk foreign key (cabecera_ventas) references cabecera_ventas(codigo_ven)
);

insert into detalle_ventas (cabecera_ventas, producto, cantidad, precio_venta, subtotal, total_con_iva)
values(1, 1, 5, 0.58, 2.9, 3.25),
(1, 4, 1, 0.36, 0.36, 0.4);


select * from categorias;
select * from categorias_unidad_medida;
select * from unidades_medida;
select * from productos;
select * from tipo_documento;
select * from proveedores;
select * from estados_pedido;
select * from cabecera_pedido;
select * from detalle_pedido;
select * from cabecera_ventas;
select * from detalle_ventas;
select * from historial_stock;

select prov.identificador , prov.tipo_documento,td.descripcion, prov.nombre, prov.telefono, prov.correo, prov.direccion
from proveedores prov, tipo_documento td
where prov.tipo_documento = td.codigo_doc
and upper(nombre) like '%SA%';

select * from productos prod, unidades_medida udm, categorias cat
where prod.udm = udm.codigo_udm
and prod.categoria = cat.codigo_cat;



select prod.codigo_pro, prod.nombre as nombre_producto, 
udm.codigo_udm as nombre_udm, udm.descripcion as descripcio_udm,
cast(prod.precio_venta as decimal (6,2)), prod.tiene_iva, 
cast (prod.coste as decimal (5,4)),
prod.categoria, cat.nombre as nombre_categoria, stock
from productos prod, unidades_medida udm, categorias cat
where prod.udm = udm.codigo_udm
and prod.categoria = cat.codigo_cat
and upper (prod.nombre) like '%M%';


update cabecera_pedido
set estado= 'S' where codigo =5

update detalle_pedido
set cantidad_recibida= 40, subtotal =20
where codigo_dp=5
