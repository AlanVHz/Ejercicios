$(document).ready(function() {
	$('.texto').hide();
	$('div').hover(function(){
		$('.texto').show('fast');
		$('.texto').css('background-color','red')
	});
});