function cliente (nombre, email, clave, direccion, telefono){
    this.nombre =  nombre;
    this.email = email;
    this.clave = clave;
    this.direccion = direccion;
    this.telefono = telefono;
};

let pedidosRealizados = [];

cliente.prototype.realizaPedido = function() {
    window.alert('¿Que pedido quieres hoy?: ')
    pedir = prompt('Escribe tu pedido aqui');
    pedidosRealizados.push(pedir);
};


cliente.prototype.verHistoriaPedidos = function(){
    pedidosRealizados.forEach(elemento => {
        window.alert(elemento);
    });
};

cliente.prototype.autentificacion = function() {
    window.alert('cliente validado');
};

function plato(nombre,precio,ingredientes){
    this.nombre = nombre;
    this.precio = precio;
    this.ingredientes = ingredientes;
};
 
let platosAofrecer= [];

plato.prototype.obtenerInfo() = function(){
    platosAofrecer.forEach(function(elemento){
        window.alert(elemento);
    });
};

function pedido(restaurante,detallesPedido,estadoPedido){
    cliente.call.this(this.nombre,email,direccion,telefono);
    this.restaurante = restaurante;
    this.detallesPedido = detallesPedido;
    this.estadoPedido = estadoPedido;
};

pedido.prototype.actualizarEstado = function(){
    cambiarEstado = prompt('Digita el nuevo estado del pedido: ');
    window.alert('Estado del pedido actualizado a: ',cambiarEstado);
};

pedido.prototype.calcularTotal = function(){
    sumar = precio * platosAofrecer;
    window.alert('Total de pedido: ',sumar);
};

function  restauranteFisico(nombre,menuFisico){
    this.nombre = nombre;
    this.menuFisico = menuFisico;
};

restauranteFisico.prototype.agregarPlato = function(){
    plato.call.this(this.nombre,precio,ingredientes);
};

restauranteFisico.prototype.actualizarPlato = function(){
    nombrePlatoModificar = prompt('Digita el nombre del plato a modificar: ');

    let posicion = platosAofrecer.indexOf(nombrePlatoModificar);

    if(posicion !== -1){
        platosAofrecer[posicion] = prompt('Digita el nuevo nombre del plato: ');
    } else {
        window.alert('No se encuentra el nombre del plato');
    }

};

restauranteFisico.prototype.eliminarPlato = function(){
    nombrePlatoEliminar = prompt('Digita el nombre del plato a eliminar: ');

    let posicionEliminar = platosAofrecer.indexOf(nombrePlatoEliminar);

    if(posicionEliminar !== -1){
        platosAofrecer.splice(posicionEliminar,1);
        window.alert('Plato eliminado correctamente');
    } else {
        window.alert('Plato no encontrado');
    }
};

function menuFisico(){
    plato.call.this(this.nombre,precio,ingredientes);
};

menuFisico.prototype.impresion = function(){
    window.alert('Impresion en proceso');
};

menuFisico.prototype.visualizacion = function(){
    window.alert('Aqui esta tu pedido: ', pedido);
};


function restauranteDigital(nombre,menuQR){
    this.nombre = nombre;
    this.menuQR = menuQR;
};

restauranteDigital.prototype.agregarPlato = function() {
    this.agregarPlato.call();
};

restauranteDigital.prototype.actualizarPlato = function() {
    this.actualizarPlato.call();
};

restauranteDigital.prototype.eliminarPlato = function() {
    this.eliminarPlato.call();
};

function menuQR(URL) {
    plato.call.this(this.nombre,precio,ingredientes);
    this.URL = URL;
};

menuQR.prototype.generarQR = function() {
    window.alert('Generando código QR ...');

};


function repartidor(vehiculo,disponibilidad){
    cliente.call.this(this.nombre,email,clave);
    this.vehiculo = vehiculo;
    this.disponibilidad = disponibilidad;
};

repartidor.prototype.aceptarEnvio = function(){
    repartidorConfirm = confirm('Acepta usted el envío: ');

    if( repartidorConfirm === true){
        window.alert('Este es la dirección de entrega: ', cliente());
    } else {
        window.alert('Servicio rechazado');
    }
};


repartidor.prototype.actualizarUbicación = function(){
    ubicacionActual = prompt('Indica tú ubicación actual: ');
    window.alert('Estas a unos minutos del cliente...');
};

repartidor.prototype.completarEntrega = function(){
    confirmarDomicilio = confirm('Confirma tu entrega por favor: ');
     if(confirmarDomicilio === true){
        window.alert('Entrega realizada');
     } else {
        window.alert('Por favor entregue el pedido');
     }

};

repartidor.prototype.autentificacion = function() {
    cliente.call.this(this.nombre,email,direccion,telefono);
};

repartidor.prototype.actualizarEstado = function() {
    estadoDomicilio = confirm('Estas preparado para hacer otro pedido: ');

    if(estadoDomicilio === true){
        window.alert('OK...Buscando pedidos disponibles');
    } else {
        window.alert('Por favor entrega adecuadamente el pedido');
    }
};



