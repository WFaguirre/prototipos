function usuario (nombre,email,puntosAcumulados,clave){
    this.nombre = nombre;
    this.email = email;
    this.puntosAcumulados = puntosAcumulados;
    this.clave = clave;
};

usuario.prototype.acumularPuntos = function(){
    return `Hola ${this.nombre} tienes ${this.puntosAcumulados} acumulados`;
};

usuario.prototype.canjearPuntos = function(){
    return `${this.nombre} puedes canjear tus puntos`
};

function ordenCanje(usuario,producto,fecha){
    usuario.call.this(this.nombre,email,puntosAcumulados,clave);
    this.producto = producto;
    this.fecha = fecha;

}

ordenCanje.prototype = Object.create(usuario.prototype);
ordenCanje.prototype.constructor = ordenCanje;

ordenCanje.prototype.confirmarOrden = function(){
    confirm('Por Favor confirme su orden: ');

    if (confirm === true){
        window.alert('Orden confirmada');
    } else {
        window.alert('Has salido del sistema')
    };
    
};

ordenCanje.prototype.cancelarOrden = function(){
    confirm('Por favor confirme si desea cancelar la orden: ');

    if (confirm === true){
        window.alert('Orden cancelada');
    } else {
        window.alert('Has salido del sistema')
    };
   
};

function actividad (tipo,puntosOtorgados){
    this.tipo = tipo;
    this.puntosOtorgados = puntosOtorgados;
};

actividad.prototype.completarActividad = function() {
    const myPromise = new Promise((resolve,reject) => {
        resolve = setTimeout(() => {
            window.alert('Completando orden');
        },5000);
        reject = window.alert('Error en carga de orden');
    });
    myPromise
    .then(resultado => {
        resolve();
    })
    .catch(error => {
        reject();
    });
    
};

function administrador(){
    usuario.call.this(this.nombre,email,clave);
};

let usuario = [];

let listaProductos = [];

administrador.prototype.agregarProducto = function(){
    nombreProducto = prompt('Digita el nombre del producto: ');

    listaProductos.push(nombreProducto);

};

administrador.prototype.modificarProducto = function(){
    nombreProductoModificar = prompt('Digita el nombre del producto a modificar: ');

    let posicion = listaProductos.indexOf(nombreProductoModificar);

    if(posicion !== -1){
        listaProductos[posicion] = prompt('Digita el nuevo nombre: ');
    } else {
        window.alert('No se encuentra el nombre del producto');
    }
};

administrador.prototype.eliminarUsuario() = function() {
    nombreUsuarioEliminar = prompt('Digita el nombre del usuario a eliminar: ');

    let posicionEliminar = usuario.indexOf(nombreUsuarioEliminar);

    if(posicionEliminar !== -1){
        usuario.splice(posicionEliminar,1);
        window.alert('Usuario eliminado correctamente');
    } else {
        window.alert('Usuario no encontrado');
    }

};

function categoriaProducto (nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;

};

categoriaProducto.prototype.listarProductos() = function() {
    listarProductos = listaProductos.forEach(function(elemento){
        window.alert(elemento);
    });
};

function productoFisico (categoriaProducto,puntosNecesarios,cantidadDisponible,precio,stock) {
    categoriaProducto.call.this(nombre);
    this.puntosNecesarios = puntosNecesarios;
    this.cantidadDisponible = cantidadDisponible;
    this.precio = precio;
    this.stock = stock;
};

productoFisico.prototype.actualizarStock() = function() {
    nombreProductoActualizar = prompt('Digita el nombre del producto a modificar: ');

    let posicion = listaProductos.indexOf(nombreProductoActualizar);

    if(posicion !== -1){
        listaProductos[posicion] = prompt('Digita el nuevo nombre: ');
    } else {
        window.alert('No se encuentra el nombre del producto');
    }    
};

productoFisico.prototype.obtenerInfo() = function(){
    listaProductos.forEach(function(elemento){
        window.alert(elemento);
    });
};

productoFisico.prototype.enviarProducto() = function() {
    productoConfimado = confirm('Desea entregar producto: ');

    if(productoConfimado === true){
        window.alert('Producto entregado...');
    } else {
        window.alert('Producto en espera...');
    } 
   
};


function productoDigital(URL){
    productoFisico.call.this(nombre,puntosNecesarios,cantidadDisponible,stock);
    this.URL = URL;
};

productoDigital.prototype.descargar() = function() {
    window.alert('Descargando producto...');
};

productoDigital.prototype.obtenerInfo() = function() {
    listaProductos.forEach(function(elemento){
        window.alert(elemento);
    });
};

productoDigital.prototype.obtenerProductoEmail() = function(){
    window.alert('Enviando al email el info del producto...');
};



