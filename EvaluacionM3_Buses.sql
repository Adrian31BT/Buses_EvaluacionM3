/*
CREATE DATABASE buses_interprovinciales_m3
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Ecuador.1252'
    LC_CTYPE = 'Spanish_Ecuador.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
*/

drop table if exists reservas;
drop table if exists rutas;
drop table if exists buses;
drop table if exists usuarios;

create table buses(
	bus_codigo serial not null,
	bus_cantidad int not null,
	constraint buses_pk primary key (bus_codigo)
);

insert into buses (bus_codigo, bus_cantidad) values (1, 20);
insert into buses (bus_codigo, bus_cantidad) values (2, 23);
insert into buses (bus_codigo, bus_cantidad) values (3, 23);
insert into buses (bus_codigo, bus_cantidad) values (4, 24);
insert into buses (bus_codigo, bus_cantidad) values (5, 25);

create table usuarios(
	usu_cedula varchar(10) not null,
	usu_nombre varchar(100) not null,
	usu_correo varchar(100) not null,
	constraint usuarios_pk primary key (usu_cedula)
);

insert into usuarios (usu_cedula, usu_nombre, usu_correo) values ('2400213131', 'Adrian Bacilio', 'adrian@gmail.com');
insert into usuarios (usu_cedula, usu_nombre, usu_correo) values ('2400213132', 'Julio Villon', 'julio@gmail.com');
insert into usuarios (usu_cedula, usu_nombre, usu_correo) values ('2400213133', 'Andres Tomala', 'andres@gmail.com');
insert into usuarios (usu_cedula, usu_nombre, usu_correo) values ('2400213134', 'Denise Perero', 'denise@gmail.com');
insert into usuarios (usu_cedula, usu_nombre, usu_correo) values ('2400213135', 'Diana Torres', 'diana@gmail.com');

create table rutas(
	rut_codigo varchar(5) not null,
	rut_ciudadOrigen varchar(50) not null,
	rut_ciudadDestino varchar(50) not null,
	rut_horaSalida time not null,
	rut_horaLlegada time not null,
	bus_codigo int not null,
	constraint rutas_pk primary key (rut_codigo),
	constraint bus_codigo_fk foreign key (bus_codigo) references buses(bus_codigo)
);

insert into rutas (rut_codigo, rut_ciudadOrigen, rut_ciudadDestino, rut_horaSalida, rut_horaLlegada, bus_codigo) values ('RUT1', 'Guayaquil', 'Santa Elena', '7:00', '10:00', 1);
insert into rutas (rut_codigo, rut_ciudadOrigen, rut_ciudadDestino, rut_horaSalida, rut_horaLlegada, bus_codigo) values ('RUT2', 'Guayaquil', 'Riobamba', '7:30', '17:00', 1);
insert into rutas (rut_codigo, rut_ciudadOrigen, rut_ciudadDestino, rut_horaSalida, rut_horaLlegada, bus_codigo) values ('RUT3', 'Guayaquil', 'Quito', '8:00', '18:00', 3);
insert into rutas (rut_codigo, rut_ciudadOrigen, rut_ciudadDestino, rut_horaSalida, rut_horaLlegada, bus_codigo) values ('RUT4', 'Guayaquil', 'Cuenca', '7:00', '15:00', 4);
insert into rutas (rut_codigo, rut_ciudadOrigen, rut_ciudadDestino, rut_horaSalida, rut_horaLlegada, bus_codigo) values ('RUT5', 'Guayaquil', 'Esmeraldas', '7:00', '15:00', 5);


create table reservas(
	res_codigo  serial not null,
	usu_cedula varchar(10) not null,
	rut_codigo varchar(5) not null,
	res_fecha date not null,
	res_asiento int not null,
	constraint reservas_pk primary key (res_codigo),
	constraint usu_cedula_fk foreign key (usu_cedula) references usuarios(usu_cedula),
	constraint rut_codigo_fk foreign key (rut_codigo) references rutas(rut_codigo)
);

insert into reservas (res_codigo, usu_cedula, rut_codigo, res_fecha, res_asiento) values (1, '2400213131', 'RUT1', '21/12/2024', 12);
insert into reservas (res_codigo, usu_cedula, rut_codigo, res_fecha, res_asiento) values (2, '2400213132', 'RUT2', '22/12/2024', 11);
insert into reservas (res_codigo, usu_cedula, rut_codigo, res_fecha, res_asiento) values (3, '2400213133', 'RUT3', '23/12/2024', 1);
insert into reservas (res_codigo, usu_cedula, rut_codigo, res_fecha, res_asiento) values (4, '2400213134', 'RUT4', '24/12/2024', 15);
insert into reservas (res_codigo, usu_cedula, rut_codigo, res_fecha, res_asiento) values (5, '2400213135', 'RUT5', '25/12/2024', 20);


select * from buses;
select * from usuarios;
select * from rutas;
select * from reservas;

select rut.rut_codigo, rut.rut_ciudadOrigen, rut.rut_ciudadDestino, rut.rut_horaSalida, rut_horaLlegada, rut.bus_codigo, bus.bus_cantidad 
from rutas rut
INNER JOIN buses bus on bus.bus_codigo = rut.bus_codigo;

