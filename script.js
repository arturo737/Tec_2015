/*function inicio(){
	var Auto = function(modelo, anio, numPuertas){
		this.modelo = modelo;
		this.anio = anio;
		this.numPuertas = numPuertas;
		// this.diHola();
		this.diHola2 = function(){
			alert("Este es el hola 2: " + this.modelo);
		}
		this.numero = 5;
		this.hola();
	}

	Auto.prototype.hola = function(){
		alert("Mi modelo es: " + this.modelo);
	}
	
	var coche1 = new Auto("chevy",1995,"4");
	var coche2 = new Auto("Tsuru",1995,"4");
	console.log(coche1.modelo);
	console.log(coche2.modelo);
	console.log(coche1.numero);
	console.log(coche2.numero);
	coche1.diHola2();
	coche2.diHola2();


	function Perro(nombre, raza, edad, queDice){
		this.nombre = nombre;
		this.raza = raza;
		this.edad = edad;
		this.queDice = queDice;
		this.comoHace();
	}

	Perro.prototype.comoHace = function(){
		alert("El " + this.nombre + " dice: " + this.queDice);
	}

	Perro.prototype.edads = function(){
		alert("Tiene: " + this.edad + " años");
	}

	var perro1 = new Perro("Cocky","Cocker",7,"waowao");
	var perro2 = new Perro("Junior","Indio",4,"weoweo");
	perro1.comoHace();
	perro2.comoHace();
	perro2.edads();
	perro1.edads();
	// Ahorcado.prototype.diHola = function(){
	// 	alert("Mi modelo es: " + this.modelo);
	// }

	
}*/
//AMBAS SON LA MISMA
/*$(document).on("ready",inicio);
function inicio(){
	alert("asxsaasxasxas");
}

$(function(){
	alert("pedro");
})*/
/*
//Animar la opacidad de un elemento de 0 a 1
$(".clase").fadeIn()
//Animar la opacidad de un elemento de 1 a 0
$(".clase").fadeout()
//Animar el alto
$(".clase").slideUp()
//Animar el bajo
$(".clase").slideDown()
//Animación
$(".clase").animate({
	height: 200px;
	opacity: 0.6
})*/

$(document).on("ready",inicio);

function inicio(){

	var form = $("#formulario"), 
		titulo = $("#titulo"),
		url = $("#url"),
		btn = $("#mostrarForm"),
		list = $("#contenido"),
		post = $(".item").first()

	function mostrarFormulario(){
		form.slideToggle();
		return false;
	}

	function agregarPost(e){
		// e.target; //quien disparó el formulario
		var urlNuevo = url.val(),
			tituloNvo = titulo.val(),
			clone = post.clone();
		clone.find(".tituloItem a").text(tituloNvo).attr('href',urlNuevo);
		clone.hide();
		list.prepend(clone);
		clone.fadeIn();
		return true;
	}
	//Eventos
	btn.click(mostrarFormulario);
	form.on("submit",agregarPost);
}
