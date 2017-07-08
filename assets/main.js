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


	
});