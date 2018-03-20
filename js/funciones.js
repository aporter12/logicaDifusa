var retrievedObject = localStorage.getItem("baseDatos");
var lista = JSON.parse(retrievedObject);
var puntajeAlopecia = sumarPuntajeEnfermedad("Alopecia");
var puntajeUrticaria = sumarPuntajeEnfermedad("Urticaria");
var puntajeDermatitis = sumarPuntajeEnfermedad("Dermatitis");
var puntajeVaricela = sumarPuntajeEnfermedad("Varicela");
var puntajeAcne = sumarPuntajeEnfermedad("Acne");
var puntajePsoriasis = sumarPuntajeEnfermedad("Psoriasis");
var puntajeRubeola = sumarPuntajeEnfermedad("Rubeola");
var puntajeMastocitosis = sumarPuntajeEnfermedad("Mastocitosis");
var puntajeEnfisema = sumarPuntajeEnfermedad("Enfisema");
var puntajeCelulitis = sumarPuntajeEnfermedad("Celulitis");
var sintomasUsuario = new Array();
cargarBaseDatos()


function obtenerDiagnostico(){
	// $('select').each(function(index) {
 //        alert($('select').attr('id'));
 //    });
     var sintomasEnfermedades = new Array();
	$('.sintoma').each(function() {
		alert($(this).attr('name'))
	    sintomasEnfermedades.push($(this).val());
	});

	alert(sintomasEnfermedades[1]);

}



function pruebaTres(){
	
	sintomasUsuario = cargarSintomasUsuario();
	var listaPosiblesEnfermedades = [];
	var listaEnfermedades = lista;
	var puntajeTotal = 0;
	var puntajeEnfermedad= 0;
	var estandarizarPuntaje=0;
	var contador = 0; //Contador para las posibles enfermedades
	 for (var enfermedad in listaEnfermedades) { //Iteración en cada enfermedad
 		puntajeTotal = interseccionEnfermedad(enfermedad);
 		puntajeEnfermedad = sumarPuntajeEnfermedad(enfermedad);
 		probabilidad = (puntajeTotal* 100 / puntajeEnfermedad); //regla de 3
 		if (probabilidad > 50){
 			listaPosiblesEnfermedades[contador] = { "numero": contador, "nombre": enfermedad, "probabilidad": probabilidad }
 			//alert("Puedes tener: "+  enfermedad+ ". Probabilidad: " + probabilidad + "%");
 			contador ++;
 		}
	}
	console.log(listaPosiblesEnfermedades);
	var resultadoEnfermedad = compararEnfermedades(listaPosiblesEnfermedades, "probabilidad")
	alert("Puedes tener: "+  resultadoEnfermedad.nombre + ". Probabilidad: " + resultadoEnfermedad.probabilidad + "%");
}

function compararEnfermedades(listaPosiblesEnfermedades, probabilidad){ //Devuelve la enfermedad que tenga más probabilidad
	 var max;
    for (var i=0 ; i<listaPosiblesEnfermedades.length ; i++) {
        if (!max || parseInt(listaPosiblesEnfermedades[i]["probabilidad"]) > parseInt(max["probabilidad"]))
            max = listaPosiblesEnfermedades[i];
    }
    return max;
}

function interseccionEnfermedad(enfermedad){
	var probabilidad =  new Array();
	sintomasUsuario =[]; // Se vacía la lita de nuevo
	sintomasUsuario = cargarSintomasUsuario();
	var enfermedadIndividual = lista[enfermedad];
 		for (var sintomas in enfermedadIndividual){ //Iteración de cada síntoma 
 			if (sintomasUsuario[sintomas - 1] == enfermedadIndividual[sintomas]){
 				probabilidad.push(enfermedadIndividual[sintomas]);
 			}
 			else if (sintomasUsuario[sintomas-1] < enfermedadIndividual[sintomas]){
 				probabilidad.push(sintomasUsuario[sintomas-1]);
 			}
 			else if(sintomasUsuario[sintomas-1] > enfermedadIndividual[sintomas]){
 				probabilidad.push(enfermedadIndividual[sintomas]);
 			}
 		}
 	var totalEnfermedad=0;
 	for (var i in probabilidad){ // Suma el puntaje de la intersección
 	 	totalEnfermedad+=probabilidad[i];
 	}
 	return totalEnfermedad;
}


function sumarPuntajeEnfermedad(enfermedad){ //Suma los puntajes máximos posibles de cada enfermedad
	var puntaje =0;
	var listaSintomas = lista[enfermedad];
	for (var key in listaSintomas) { //Devuelve todos los síntomas
 		puntaje += listaSintomas[key];
	}
	return puntaje;
}

function cargarSintomasUsuario(){
	 for (var i=1; i<= Object.keys(lista.Alopecia).length; i++){ // Encuentra los puntajes de todas las enfermedades por nombre
 		sintomasUsuario.push(parseFloat($("select[name="+i+"]").val()))
 	 }
 	 return sintomasUsuario;
}

// function pruebaEnfermedad(){
// 	var probabilidadUrticaria =  new Array();
// 	sintomasUsuario =[]; // Se vacía la lita de nuevo
// 	sintomasUsuario = cargarSintomasUsuario();
// 	var enfermedad = lista.Urticaria;
//  		for (var sintomas in enfermedad){ //Iteración de cada síntoma 
//  			if (sintomasUsuario[sintomas - 1] == enfermedad[sintomas]){
//  				probabilidadUrticaria.push(enfermedad[sintomas]);
//  			}
//  			else if (sintomasUsuario[sintomas-1] < enfermedad[sintomas]){
//  				probabilidadUrticaria.push(sintomasUsuario[sintomas-1]);
//  			}
//  			else if(sintomasUsuario[sintomas-1] > enfermedad[sintomas]){
//  				probabilidadUrticaria.push(enfermedad[sintomas]);
//  			}
//  		}
//  	var totalUrticaria=0;
//  	for (var i in probabilidadUrticaria){
//  	 	totalUrticaria+=probabilidadUrticaria[i];
//  	}
//  	console.log("Suma total: " + totalUrticaria);
// }