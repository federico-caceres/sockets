var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');
})

socket.on('disconnect', function() {
    console.log("Perdimos conexion con el servidor");
})


socket.emit('enviarMensaje', {
    usuario: 'Federico',
    mensajes: 'Hola mundo'
}, function(resp) {
    console.log('respuesta sever: ', resp);
});


socket.on('enviarMensaje', function(mensaje) {
    console.log('Info del servidor: ', mensaje);
})