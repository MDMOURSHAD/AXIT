$(document).ready(function(){

   // TAB 

  $('.tab-content-2').hide();
  $('.tab-content-3').hide();

  $('.tab-1').addClass('active-color');

  // IF TAB 2 IS ACTIVE

  $('.tab-2').click(function(){
 	 $('.tab-content-1').hide();
 	 $('.tab-content-2').show();
 	 $('.tab-content-3').hide();

 	 $('.tab-1').removeClass('active-color');
 	 $('.tab-2').addClass('active-color');
 	 $('.tab-3').removeClass('active-color');
  });

  // IF TAB 3 IS ACTIVE 

  $('.tab-3').click(function(){

  	$('.tab-content-1').hide();
  	$('.tab-content-2').hide();
  	$('.tab-content-3').show();

  	$('.tab-1').removeClass('active-color');
  	$('.tab-2').removeClass('active-color');
  	$('.tab-3').addClass('active-color');
   });

  // IF TAB 3 IS ACTIVE

  $('.tab-1').click(function(){

  	$('.tab-content-1').show();
  	$('.tab-content-2').hide();
  	$('.tab-content-3').hide();

  	$('.tab-1').addClass('active-color');
  	$('.tab-2').removeClass('active-color');
  	$('.tab-3').removeClass('active-color');
   });



});