function cargarBaseDatos(){

		var enfermedades = {
			"Alopecia":{
				1: 1, //Perdida Cabello
				2:.4, //Caspa
				3:.6, //Picazón
				4:0, //Enrojecimiento
				5:0, //Ronchas
				6:0, //Pústulas
				7:0, //Pérdida apetito
				8:0, // Dolor de cabeza
				9:0, // Hinchazón
				10:0, // Piel Seca
				11:0,  // Manchas Rojas 
				12:0, // Fatiga
				13:0, // Fiebre
				14:0, //Espinillas 
				15:0, //Costras
				16:0, // Dolor articular
				17:0, // Dolor de garganta
				18:0, //Piel con hoyuelos
				19:0, // Dolor de huesos
				20:0, // Calambres
				21:0, // Congestión nasal
				22:0 // Erupciones en la cara
			}, 
			"Urticaria":{
				1: 0, //Perdida Cabello
				2: 0, //Caspa
				3: .7, //Picazón
				4: 0, //Enrojecimiento
				5: .8, //Ronchas
				6: 0, //Pústulas
				7: .5, //Pérdida apetito
				8: .5, // Dolor de cabeza
				9: 0, // Hinchazón
				10: 0, // Piel Seca
				11: 0,  // Manchas Rojas 
				12:0, // Fatiga
				13: 0, // Fiebre
				14:0, //Espinillas 
				15:0, //Costras
				16:0, // Dolor articular
				17:0, // Dolor de garganta
				18:0, //Piel con hoyuelos
				19: 0, // Dolor de huesos
				20: 0, // Calambres
				21: 0, // Congestión nasal
				22:0 // Erupciones en la cara
			},
			"Dermatitis":{
				1: 0, //Perdida Cabello
				2: 0, //Caspa
				3: .9, //Picazón
				4: .7, //Enrojecimiento
				5: 0, //Ronchas
				6: 0, //Pústulas
				7: 0, //Pérdida apetito
				8: 0, // Dolor de cabeza
				9: .2, // Hinchazón
				10: .9, // Piel Seca
				11: 0,  // Manchas Rojas 
				12:0, // Fatiga
				13: 0, // Fiebre
				14:0, //Espinillas 
				15:0, //Costras
				16:0, // Dolor articular
				17:0, // Dolor de garganta
				18:0, //Piel con hoyuelos
				19: 0, // Dolor de huesos
				20: 0, // Calambres
				21: 0, // Congestión nasal
				22:0 // Erupciones en la cara
			},
			"Varicela":{
				1: 0, //Perdida Cabello
				2: 0, //Caspa
				3: 1, //Picazón
				4: .2, //Enrojecimiento
				5: 0, //Ronchas
				6: 1, //Pústulas
				7: .2, //Pérdida apetito
				8: .5, // Dolor de cabeza
				9: 0, // Hinchazón
				10: 0, // Piel Seca
				11: 0,  // Manchas Rojas 
				12: .8, // Fatiga
				13: .3, // Fiebre
				14: 0, //Espinillas 
				15: 1, //Costras
				16: 0, // Dolor articular
				17: 0, // Dolor de garganta
				18:0, //Piel con hoyuelos
				19: 0, // Dolor de huesos
				20: 0, // Calambres
				21: 0, // Congestión nasal
				22: .4 // Erupciones en la cara
			},
			"Acne":{
				1: 0, //Perdida Cabello
				2: 0, //Caspa
				3: 0, //Picazón
				4: .5, //Enrojecimiento
				5: 0, //Ronchas
				6: 0, //Pústulas
				7: 0, //Pérdida apetito
				8: 0, // Dolor de cabeza
				9: 0, // Hinchazón
				10: .2, // Piel Seca
				11: 0,  // Manchas Rojas 
				12:0, // Fatiga
				13: 0, // Fiebre
				14: 1, //Espinillas 
				15: .5, //Costras
				16:0, // Dolor articular
				17:0, // Dolor de garganta
				18:.3, //Piel con hoyuelos
				19: 0, // Dolor de huesos
				20: 0, // Calambres
				21: 0, // Congestión nasal
				22:0 // Erupciones en la cara
			},
			"Psoriasis":{
				1: 0, //Perdida Cabello
				2: 1, //Caspa
				3: .7, //Picazón
				4: .9, //Enrojecimiento
				5: 0, //Ronchas
				6: 0, //Pústulas
				7: 0, //Pérdida apetito
				8: 0, // Dolor de cabeza
				9: 0, // Hinchazón
				10: .8, // Piel Seca
				11: 0,  // Manchas Rojas 
				12:0, // Fatiga
				13: 0, // Fiebre
				14:0, //Espinillas 
				15:0, //Costras
				16:0.6, // Dolor articular
				17:0, // Dolor de garganta
				18:0, //Piel con hoyuelos
				19: 0, // Dolor de huesos
				20: 0, // Calambres
				21: 0, // Congestión nasal
				22:0 // Erupciones en la cara
			},
			"Rubeola":{
				1: 0, //Perdida Cabello
				2: 0, //Caspa
				3: .6, //Picazón
				4: 0, //Enrojecimiento
				5: 0, //Ronchas
				6: 0, //Pústulas
				7: .3, //Pérdida apetito
				8: .4, // Dolor de cabeza
				9: 0, // Hinchazón
				10: .5, // Piel Seca
				11: 1,  // Manchas Rojas 
				12: .4, // Fatiga
				13: .9, // Fiebre
				14:0, //Espinillas 
				15:0, //Costras
				16:0, // Dolor articular
				17:0, // Dolor de garganta
				18:0, //Piel con hoyuelos
				19: 0, // Dolor de huesos
				20: 0, // Calambres
				21: .3, // Congestión nasal
				22: .3 // Erupciones en la cara
			},
			"Mastocitosis":{
				1: 0, //Perdida Cabello
				2: 0, //Caspa
				3: .7, //Picazón
				4: 0, //Enrojecimiento
				5: 0, //Ronchas
				6: 0, //Pústulas
				7: 0, //Pérdida apetito
				8: 0, // Dolor de cabeza
				9: 0, // Hinchazón
				10: 0, // Piel Seca
				11: 0,  // Manchas Rojas 
				12:0, // Fatiga
				13: 0, // Fiebre
				14:0, //Espinillas 
				15:0, //Costras
				16:0, // Dolor articular
				17:0, // Dolor de garganta
				18:0, //Piel con hoyuelos
				19: .8, // Dolor de huesos
				20: 0, // Calambres
				21: 0, // Congestión nasal
				22: .6 // Erupciones en la cara
			},
			"Enfisema":{
				1: 0, //Perdida Cabello
				2:0, //Caspa
				3: 0, //Picazón
				4: 0, //Enrojecimiento
				5: 0, //Ronchas
				6: 0, //Pústulas
				7: 0, //Pérdida apetito
				8: 0, // Dolor de cabeza
				9: .6, // Hinchazón
				10: 0, // Piel Seca
				11: 0,  // Manchas Rojas 
				12:0, // Fatiga
				13: 0, // Fiebre
				14:0, //Espinillas 
				15:0, //Costras
				16:0, // Dolor articular
				17:.9, // Dolor de garganta
				18:0, //Piel con hoyuelos
				19: 0, // Dolor de huesos
				20: 0, // Calambres
				21: 0, // Congestión nasal
				22:0 // Erupciones en la cara
			},
			"Celulitis":{
				1: 0, //Perdida Cabello
				2: 0, //Caspa
				3: 0, //Picazón
				4: .8, //Enrojecimiento
				5: 0, //Ronchas
				6: 0, //Pústulas
				7: 0, //Pérdida apetito
				8: 0, // Dolor de cabeza
				9: .8, // Hinchazón
				10: 0, // Piel Seca
				11: .6,  // Manchas Rojas 
				12:0, // Fatiga
				13: .4, // Fiebre
				14:0, //Espinillas 
				15:0, //Costras
				16:0, // Dolor articular
				17:0, // Dolor de garganta
				18:1, //Piel con hoyuelos
				19: 0, // Dolor de huesos
				20: .4, // Calambres
				21: 0, // Congestión nasal
				22:0 // Erupciones en la cara
			}
		}
		localStorage.setItem("baseDatos", JSON.stringify(enfermedades));
}

