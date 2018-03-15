function cargarBaseDatos(){

		var enfermedades = {
			"Alopecia":{
				"perdicaCabello": 1,
				"caspa":.4,
				"picazon": .6,
				"enrojecimiento": 0,
				"ronchas": 0,
				"pustulas": 0,
				"perdidaApetito": 0,
				"dolorCabeza": 0,
				"hinchazon": 0,
				"pielSeca": 0,
				"manchasRojas": 0,
				"fatiga":0,
				"fiebre": 0,
				"espinillas":0,
				"costras":0,
				"dolorArticular":0,
				"congestionNasal":0,
				"erupcionesCara":0,
				"dolorHuesos": 0,
				"calambras": 0,
				"dolorGarganta":0,
				"pielHoyuelos":0
			},
			"Urticaria":{
				"perdicaCabello": 0,
				"caspa":0,
				"picazon": .7,
				"enrojecimiento": 0,
				"ronchas": .8,
				"pustulas": 0,
				"perdidaApetito": .5,
				"dolorCabeza": .5,
				"hinchazon": .0,
				"pielSeca": 0,
				"manchasRojas": 0,
				"fatiga":0,
				"fiebre": 0,
				"espinillas":0,
				"costras":0,
				"dolorArticular":0,
				"congestionNasal":0,
				"erupcionesCara":0,
				"dolorHuesos": 0,
				"calambras": 0,
				"dolorGarganta":0,
				"pielHoyuelos":0
			}
		}
		localStorage.setItem("baseDatos", JSON.stringify(enfermedades));
		alert("Archivo guardado");
}

function cargarEnfermedad(){
	var retrievedObject = localStorage.getItem("baseDatos");
	var retrievedObject = JSON.parse(retrievedObject);
	document.getElementById('enfermedad').innerHTML=retrievedObject.Alopecia;
	for (var key in retrievedObject) {
		  if (retrievedObject.hasOwnProperty(key)) {
		    var val = retrievedObject[key];
		    alert(val);
		  }
		}
}
