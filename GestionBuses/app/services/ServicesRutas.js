export const insertarRutas = (post, fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            rut_codigo: post.rut_codigo,
            rut_ciudadOrigen: post.rut_ciudadOrigen,
            rut_ciudadDestino: post.rut_ciudadDestino,
            rut_horaSalida: post.rut_horaSalida,
            rut_horaLlegada: post.rut_horaLlegada,
            bus_codigo: post.bus_codigo,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    }
    fetch("http://192.168.3.201:8080/buses_interprovinciales-1.0.0/rest/rutas/insertarRutas", config)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
        });
    fnExito();
};