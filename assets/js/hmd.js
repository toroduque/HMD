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
*name: Animation on services.html
*action: Chango color of icons and display the info of each service
*
*/

$(document).ready(function(){

  $("#hmd-product1").click(function(){
    $("#hmd-services1").show(300,"swing");
    $("#hmd-services2").hide(300,"swing");
    $("#hmd-services3").hide(300,"swing");
    $("#hmd-services4").hide(300,"swing");
    $("#hmd-services5").hide(300,"swing");
    $("#hmd-title-1").removeClass('btn-service').addClass('btn-service-active');
    $("#hmd-title-2").removeClass('btn-service-active').addClass('btn-service');
    $("#hmd-title-3").removeClass('btn-service-active').addClass('btn-service');
    $("#hmd-title-4").removeClass('btn-service-active').addClass('btn-service');
    $("#hmd-title-5").removeClass('btn-service-active').addClass('btn-service');

  });


    $("#hmd-product2").click(function(){
    $("#hmd-services2").show(300, "swing");
    $("#hmd-services3").hide(300,"swing");
    $("#hmd-services4").hide(300,"swing");
    $("#hmd-services5").hide(300,"swing");
    $("#hmd-services1").hide(300,"swing");
    $("#hmd-title-1").removeClass('btn-service-active').addClass('btn-service');
    $("#hmd-title-2").removeClass('btn-service').addClass('btn-service-active');
    $("#hmd-title-3").removeClass('btn-service-active').addClass('btn-service');
    $("#hmd-title-4").removeClass('btn-service-active').addClass('btn-service');
    $("#hmd-title-5").removeClass('btn-service-active').addClass('btn-service');
  });

    $("#hmd-product3").click(function(){
    $("#hmd-services3").show(300,"swing");
    $("#hmd-services4").hide(300,"swing");
    $("#hmd-services5").hide(300,"swing");
    $("#hmd-services1").hide(300,"swing");
    $("#hmd-services2").hide(300,"swing");
    $("#hmd-title-1").removeClass('btn-service-active').addClass('btn-service');
    $("#hmd-title-2").removeClass('btn-service-active').addClass('btn-service');
    $("#hmd-title-3").removeClass('btn-service').addClass('btn-service-active');
    $("#hmd-title-4").removeClass('btn-service-active').addClass('btn-service');
    $("#hmd-title-5").removeClass('btn-service-active').addClass('btn-service');
  });

  $("#hmd-product4").click(function(){
    $("#hmd-services4").show(300,"swing");
    $("#hmd-services5").hide(300,"swing");
    $("#hmd-services1").hide(300,"swing");
    $("#hmd-services2").hide(300,"swing");
    $("#hmd-services3").hide(300,"swing");
    $("#hmd-title-1").removeClass('btn-service-active').addClass('btn-service');
    $("#hmd-title-2").removeClass('btn-service-active').addClass('btn-service');
    $("#hmd-title-3").removeClass('btn-service-active').addClass('btn-service');
    $("#hmd-title-4").removeClass('btn-service').addClass('btn-service-active');
    $("#hmd-title-5").removeClass('btn-service-active').addClass('btn-service');
  });

    $("#hmd-product5").click(function(){
    $("#hmd-services5").show(300,"swing");
    $("#hmd-services1").hide(300,"swing");
    $("#hmd-services2").hide(300,"swing");
    $("#hmd-services3").hide(300,"swing");
    $("#hmd-services4").hide(300,"swing");
    $("#hmd-title-1").removeClass('btn-service-active').addClass('btn-service');
    $("#hmd-title-2").removeClass('btn-service-active').addClass('btn-service');
    $("#hmd-title-3").removeClass('btn-service-active').addClass('btn-service');
    $("#hmd-title-4").removeClass('btn-service-active').addClass('btn-service');
    $("#hmd-title-5").removeClass('btn-service').addClass('btn-service-active');
  });

 



});



