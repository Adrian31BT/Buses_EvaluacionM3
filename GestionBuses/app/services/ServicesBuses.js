export const insertarBuses = (post, fnExito) => {
    const config={
        method: 'POST',
        body:JSON.stringify({
            bus_cantidad:post.bus_cantidad,
        }),
        headers:{
            'Content-type': 'application/json',
        }
    }
    fetch("http://192.168.3.201:8080/buses_interprovinciales-1.0.0/rest/buses/crearBus", config)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
    fnExito();
  };