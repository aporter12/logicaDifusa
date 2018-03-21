var retrievedObject = localStorage.getItem("baseDatos"); //Se obtiene la información
var lista = JSON.parse(retrievedObject); //  Se hace un objeto JSON para trabajar con él
var sintomasUsuario = new Array();
var checkboxEnfermedades = new Array();
cargarBaseDatos()




function obtenerDiagnostico(){ //Diagnóstivo general - Función para obtener los puntajes de todas las enfermedades
	sintomasUsuario =[];
	sintomasUsuario = cargarSintomasUsuario(); //Toma los síntomas del usuario
	var mensaje="";
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
 		if (probabilidad > 50){ // Si pasa el umbral de 50
 			listaPosiblesEnfermedades[contador] = { "numero": contador, "nombre": enfermedad, "probabilidad": probabilidad }
 			//alert("Puedes tener: "+  enfermedad+ ". Probabilidad: " + probabilidad + "%");
 			contador ++;
 		}
	}
	if(listaPosiblesEnfermedades.length ==0){ //Si ninguna pasó el umbral
		mensaje = "No hay ninguna enfermedad en la base de datos que coincida con ese cuadro de síntomas"
	}else {
		mensaje += "<p style='text-align:center'>Las posibles enfermedades que podrías tener son:</p> <br>";
		for (var i in listaPosiblesEnfermedades) {
			 mensaje += "-" + listaPosiblesEnfermedades[i].nombre + ", con grado de coincidencia de: " + listaPosiblesEnfermedades[i].probabilidad + "%" + "<br>";
	    }
	}
	mostrarMensaje(mensaje);
}

function mostrarMensaje(mensaje){ // Ambos - Muestra el resultado
	$("#respuesta").removeClass("hidden");
	$("#cuestionario").addClass("hidden");
	$("#mensaje").html(mensaje);

}

function interseccionEnfermedad(enfermedad){ // Ambos - Saca la intersección de los síntomas del usuario con los síntomas de las enfermedades
	var probabilidad =  new Array();
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


function sumarPuntajeEnfermedad(enfermedad){ // Ambos -Suma los puntajes máximos posibles de cada enfermedad que se le pase como parámetro
	var puntaje =0;
	var listaSintomas = lista[enfermedad];
	for (var key in listaSintomas) { //Devuelve todos los síntomas
 		puntaje += listaSintomas[key];
	}
	return puntaje;
}

function cargarSintomasUsuario(){ // Ambos - Función para sacar los puntajes de las barras
	 for (var i=1; i<= Object.keys(lista.Alopecia).length; i++){ // Encuentra los puntajes de todas las enfermedades por nombre
 		sintomasUsuario.push(parseFloat($("select[name="+i+"]").val()))
 	 }
 	 return sintomasUsuario;
}


function reiniciarPrueba(){ // Ambos - Función para reiniciar los puntajes 
	 for (var i=1; i<= Object.keys(lista.Alopecia).length; i++){ // Encuentra los puntajes de todas las enfermedades por nombre
 		$("select[name="+i+"]").barrating('clear');
 	 }
 }


function regresarCuestionario(){ // Ambos - Función para volver a mostrar el cuestionario
	$("#respuesta").addClass("hidden");
	$("#cuestionario").removeClass("hidden");
	for (var i=1; i<= Object.keys(lista.Alopecia).length; i++){ //  Reiniciar los puntajes de todas las enfermedades por nombre
 		$("select[name="+i+"]").barrating('clear');
 	 }
}

function getChecked(){ //Diagnóstivo específico - Función para obtener todas las enfermedades que  tienen check, si no hay ninguna, la bandera se queda como false
	var bandera = false;
	var contadorCheck= 0; //Contador para saber cuántas enfermedades el usuario dio check
	$('input[type=checkbox]:checkbox:checked').each(function() {
		checkboxEnfermedades.push($(this).attr('id'));
		contadorCheck++;
	});
	if (contadorCheck >= 2){
		bandera=true;
	}
	return bandera;
}

function obtenerDiagnosticoEspecifico(){ //Diagnóstivo específico - Función para hacer todos los cálculos del diagnóstico específico
	checkboxEnfermedades = [];
	if (getChecked()==true){ //Si hay 2 enfermedades o más, se procede con la función 
		sintomasUsuario =[]; // Se vacía la lista de nuevo
		sintomasUsuario = cargarSintomasUsuario();
		var mensaje="";
		var listaPosiblesEnfermedades = [];
		var listaEnfermedades = lista;
		var puntajeTotal = 0;
		var puntajeEnfermedad= 0;
		var estandarizarPuntaje=0;
		var contador = 0; //Contador para las posibles enfermedades
		 	for (var x=0; x<checkboxEnfermedades.length;x++){
		 		puntajeTotal = interseccionEnfermedad(checkboxEnfermedades[x]);
			 	puntajeEnfermedad = sumarPuntajeEnfermedad(checkboxEnfermedades[x]);
			 	probabilidad = (puntajeTotal* 100 / puntajeEnfermedad); //regla de 3
			 	if (probabilidad > 50){
			 		listaPosiblesEnfermedades[contador] = { "numero": contador, "nombre": checkboxEnfermedades[x], "probabilidad": probabilidad }
			 		contador ++;
			 	}
			 }
				if(listaPosiblesEnfermedades.length ==0){
					mensaje = "No hay ninguna enfermedad en la base de datos que coincida con ese cuadro de síntomas"
				}else {
					mensaje += "<p style='text-align:center'>Las posibles enfermedades que podrías tener son:</p> <br>";
					for (var i in listaPosiblesEnfermedades) {
						 mensaje += "-" + listaPosiblesEnfermedades[i].nombre + ", con grado de coincidencia de: " + listaPosiblesEnfermedades[i].probabilidad + "%" + "<br>";
				    }
				}
				mostrarMensaje(mensaje);		
	}
	else {
		alert("Debes seleccionar al menos dos enfermedades");
	}	
}

