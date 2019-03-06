/**************** changement du logo au survol de la souris ******/
var changeLogo = function(){
  document.getElementById('logo').src = '../img/logo_parimis_rouge.png'
}
var changeLogo1 = function(){
  document.getElementById('logo').src = '../img/logo_parimis.png'
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
