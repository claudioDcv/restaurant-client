var api = 'http://localhost:8000/api';
var appendSelect = function(id, data, key) {
    var data = data.map(function(e) {
        return '<option value="' + e.id + '">' + e[key] + '</option>';
    });
    $(id).html(data);
};

var mesas = function(id) {
    jQuery.ajax({url: api + "/mesas", success: function(result){
        console.log(result);
        appendSelect(id, result, 'nombre');
    }});
};

var clientes = function(id){
    jQuery.ajax({url: api + "/clientes", success: function(result){
        console.log(result);
        appendSelect(id, result, 'nombre');
    }});
};

var productos = function(id) {
    jQuery.ajax({url: api + "/productos", success: function(result){
        console.log(result);
        appendSelect(id, result, 'nombre');
    }});
};

var reservaPorID = function(id, fn) {
    jQuery.ajax({url: api + "/reservas/" + id, success: function(result){
        console.log(result);
        fn(result);
    }});
};

var pedidosPorReservaId = function(id, fn) {
    jQuery.ajax({url: api + "/pedidos-por-reserva/" + id, success: function(result){
        console.log(result);
        fn(result);
    }});
};


var reservaPorNombreCliente = function(nombre, fn) {
    jQuery.ajax({url: api + "/reserva-por-nombre-cliente?nombre=" + nombre , success: function(result){
        console.log(result);
        fn(result);
    }});
};


var reservaEliminarPorID = function(id, fn) {
    jQuery.ajax({type: 'DELETE', url: api + "/reservas/" + id, success: function(result){
        console.log(result);
        fn(result);
    }});
};
