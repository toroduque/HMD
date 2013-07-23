/*carousel activator*/
!function ($) {
	$(function(){
          // carousel
          $('#myCarousel').carousel();
      });
}(window.jQuery);

/*ajax functions
-----------------------------------------------------------
*/

/*
*name: search_dx
*action: sends 'diagnostico' data with 'post' method
*
*/
function search_dx() {
	var diagnostico=$('#diagnostico').val();
  if (diagnostico!="") {
  $.post('modules/includes/ajax/cie10.php', 
    {diagnostico:diagnostico},
    function(data){ 
      $('#cie10_result').html(data);
    });}
  else {$('#cie10_result').html('');}
}

/*Actions: activate search_dx with button click or pressing enter key*/
$('#search_cie10').click(function(){search_dx(); });//clicking button
$('#diagnostico').bind('keypress', function(e) {
	if(e.keyCode==13){search_dx();}//pressing 'enter' key
});



/*
*name: search_cups
*action: sends 'cups' data with 'post' method
*
*/
function search_cups() {
  var cups=$('#cups').val();
  if (cups!="") {
  $.post('modules/includes/ajax/cups.php', 
    {cups:cups},
    function(data){ 
      $('#cups_result').html(data);
    });}
  else {$('#cups_result').html('');}
}

/*Actions: activate search_dx with button click or pressing enter key*/
$('#search_cups').click(function(){search_cups(); });//clicking button

$('#cups').bind('keypress', function(e) {
  if(e.keyCode==13){search_cups();}//pressing 'enter' key
});


/*
*name: twitter-hmd
*action: change twitter logo on mouseover
*
*/
$(function() {
    $("#hmd-twitter")
        .mouseover(function() { 
            var src = $("#hmd-twitter").attr("src").match("assets/img/hmd-twitter.png");
            $("#hmd-twitter").attr("src","assets/img/hmd-twitter.png" );
        })
        .mouseout(function() {
            var src = $("#hmd-twitter").attr("src").replace("assets/img/hmd-twitter1.png");
            $(this).attr("src", "assets/img/hmd-twitter1.png");
        });
});


/*
*name: linkedin-hmd
*action: change linkedin logo on mouseover
*
*/
$(function() {
    $("#hmd-linkedin")
        .mouseover(function() { 
            var src = $("#hmd-linkedin").attr("src").match("assets/img/hmd-linkedin.png");
            $("#hmd-linkedin").attr("src","assets/img/hmd-linkedin.png" );
        })
        .mouseout(function() {
            var src = $("#hmd-linkedin").attr("src").replace("assets/img/hmd-linkedin1.png");
            $(this).attr("src", "assets/img/hmd-linkedin1.png");
        });
});

/*
*name: Animations on services.html
*
*/

function change_content(service_show){
  for( var i = 1; i <= 5; i=i+1 ){
    $("#hmd-services" + i).hide(300,"swing");
  }
  $("#hmd-services" + service_show).show(300,"swing");
}

function nav_animation(id_title){
  for (var i = 1;  i <= 5; i=i+1 ) {
    $("#hmd-title-" + i).removeClass('btn-service-active').addClass('btn-service');
  }
  $("#hmd-title-" + id_title).removeClass('btn-service').addClass('btn-service-active');
} 

/*-----------------------------------*/

$(document).ready(function(){

  $("#hmd-product1").click(function(){
    /* Change content */
    change_content(1);

    /* Navbar animation */
    nav_animation(1);

    /* Navbar change fonts */
    $("#service-title-1").removeClass('lead-services').addClass('lead-services-active');
    $("#service-title-2").removeClass('lead-services-active').addClass('lead-services');
    $("#service-title-3").removeClass('lead-services-active').addClass('lead-services');
    $("#service-title-4").removeClass('lead-services-active').addClass('lead-services');
    $("#service-title-5").removeClass('lead-services-active').addClass('lead-services');

  });


    $("#hmd-product2").click(function(){
      /* Change content */
      change_content(2);

    /* Navbar animation */
      nav_animation(2);
    
     /* Navbar change fonts */
    $("#service-title-1").removeClass('lead-services-active').addClass('lead-services');
    $("#service-title-2").removeClass('lead-services').addClass('lead-services-active');
    $("#service-title-3").removeClass('lead-services-active').addClass('lead-services');
    $("#service-title-4").removeClass('lead-services-active').addClass('lead-services');
    $("#service-title-5").removeClass('lead-services-active').addClass('lead-services');

  });

    $("#hmd-product3").click(function(){
      /* Change content */
      change_content(3);

    /* Navbar animation */
      nav_animation(3);
     /* Navbar change fonts */
    $("#service-title-1").removeClass('lead-services-active').addClass('lead-services');
    $("#service-title-2").removeClass('lead-services-active').addClass('lead-services');
    $("#service-title-3").removeClass('lead-services').addClass('lead-services-active');
    $("#service-title-4").removeClass('lead-services-active').addClass('lead-services');
    $("#service-title-5").removeClass('lead-services-active').addClass('lead-services');
  });

  $("#hmd-product4").click(function(){
    /* Change content */
    change_content(4);

    /* Navbar animation */
      nav_animation(4);
     /* Navbar change fonts */
    $("#service-title-1").removeClass('lead-services-active').addClass('lead-services');
    $("#service-title-2").removeClass('lead-services-active').addClass('lead-services');
    $("#service-title-3").removeClass('lead-services-active').addClass('lead-services');
    $("#service-title-4").removeClass('lead-services').addClass('lead-services-active');
    $("#service-title-5").removeClass('lead-services-active').addClass('lead-services');
  });

    $("#hmd-product5").click(function(){
      /* Change content */
      change_content(5);
 
    /* Navbar animation */
      nav_animation(5);
      
     /* Navbar change fonts */
    $("#service-title-1").removeClass('lead-services-active').addClass('lead-services');
    $("#service-title-2").removeClass('lead-services-active').addClass('lead-services');
    $("#service-title-3").removeClass('lead-services-active').addClass('lead-services');
    $("#service-title-4").removeClass('lead-services-active').addClass('lead-services');
    $("#service-title-5").removeClass('lead-services').addClass('lead-services-active');
  });

 



});



