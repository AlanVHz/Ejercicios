$(document).ready(function(){
	//$(".hide").hide("slow");
	$(".enter").mouseenter(function(){
		$(".enter").css({"background-color":"black",
		"color":"red"});});
	$(".enter").mouseleave(function(){
		$(".enter").css({"background-color":"red",
		"color":"white"});});
	$(".fadeTo").fadeTo(1000,0.33);
	$(".fadeOut").fadeOut(3000);
	$(".click").click(function(){
		$(".fadeIn").fadeIn("slow");
		$(".fadeIn").css({"display":"inline-block"});
	});

	$(".this").click(function(){
		$(this).fadeOut(1500);
	});

	var numero = 7;
	var nombre = "AlanVargas";
	var $miVariable = $("<span>Hola</span>");

	//$('.variable').append(numero);
	//$('.variable').append(nombre);
	$('.variable').append($miVariable);

	$("#prepend").append("<p>Espero les guste!</p>");
	$("#prepend").prepend("<span><b>Hola!,</b></span>");

});