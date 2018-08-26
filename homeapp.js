/*
$('.menu-toggle').click(function() {

  $('.site-nav').toggleClass('site-nav--open');
  $(this).toggleClass('open');
  
})
*/

var menuToggle= document.querySelector('.menu-toggle')

menuToggle.addEventListener("click",function(){
  var siteNav= document.querySelector('.site-nav')
  siteNav.classList.toggle('site-nav--open')
  menuToggle.classList.toggle('open')
})
