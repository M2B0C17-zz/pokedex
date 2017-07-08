$(document).ready(function(){

	/* Icono Placeholder */
	$('#iconoSearch').on('keyup', function() { // conectamos con el id en el HTML
    var input = $(this);
    if(input.val().length === 0) {
        input.addClass('empty');
    } else {
        input.removeClass('empty'); // al excribir se esconde el icono
    }
	});


	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon', // link donde estan todos los pokes
		type: 'GET', // obtener datos
		dataType: 'JSON', 
		data: {'limit': '811'}, // hasta 811 pokes :S
	})
	.done(function(pok) {
		mostrar(pok.results); // variable que recorrera los pokes
		console.log(pok);
		console.log("success");
	})
	.fail(function() {
		console.log("error"); // para errores
	})
	.always(function() {
		console.log("complete"); 
	});
	
	var mostrar = function(data){ // recorrera los 811 pokes :S
		data.forEach(function(elementPokes){
			var nombre = elementPokes.name; // nombre pokemonsss
			// Fotos
			$('#pokesSec2').append("<div id='pokeSecFotos' class='col-md-2'><div class='row'><img class='fotosPokemonss img-responsive' src='http://img.pokemondb.net/artwork/" + nombre + ".jpg'></div></div>");
			// Nombre de pokes
			$('#pokeSecFotos').append("<h2>" + nombre + "</h2>");
		})
	}

});