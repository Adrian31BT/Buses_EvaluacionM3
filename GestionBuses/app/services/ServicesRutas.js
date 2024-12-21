export const createRuta = (ruta, fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            rut_codigo: ruta.codRuta,
            rut_ciudadOrigen: ruta.cOrigen,
            rut_ciudadDestino: ruta.cDestino,
            rut_horaSalida: ruta.hSalida,
            rut_horaLlegada: ruta.hLlegada,
            bus: {
                bus_codigo:ruta.codBus
            }
        }),
        headers: {
            'Content-type': 'application/json',
        }
    }
    fetch("http://192.168.3.201:8080/buses_interprovinciales-1.0.0/rest/rutas/insertarRutas", config)
    .then((response) => { return response.json() })
    .then((json) => { console.log(json); fnExito(); });
}