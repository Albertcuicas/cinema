$(document).ready(function(){
	console.log("Script2.ready");
	var tablaDatos = $("#datos");
	var route= "http://localhost:8000/generos";

	$.get(route, function (res) {
		$(res).each(function(key,value){
			tablaDatos.append("<tr><td>"+value.genre+"</td> <td><button class='btn btn-primary'>Editar</button> <button class='btn btn-danger'>Eliminar</button></td> </tr>");
		});
	});
});