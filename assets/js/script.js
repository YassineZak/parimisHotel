
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
/**************** changement du logo au survol de la souris ******/
var changeLogo = function(){
  document.getElementById('logo').src = '../image/logo_parimis_rouge.png'
}
var changeLogo1 = function(){
  document.getElementById('logo').src = '../image/logo_parimis.png'
}
/****************** menu hamburger ***************/
$(function(){
  $('#toggle_btn').click(function(){
    $('#navresponsive').show();
    $('header').hide();
    $('main').hide();
    $('footer').hide();
  })
  $('.quitter').click(function(){
    $('#navresponsive').hide();
    $('header').show();
    $('main').show();
    $('footer').show();
  })
})
/************* fin menu hamburger *****************/
$(document).ready(function(){
    alert('ca marche bien ');
})