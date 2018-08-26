var menuToggle= document.querySelector('.menu-toggle')

function menu(){
  var siteNav= document.querySelector('.site-nav')
  siteNav.classList.toggle('site-nav--open')
  menuToggle.classList.toggle('open')
}

menuToggle.addEventListener("click",menu)
document.querySelector('.fa-info').parentElement.addEventListener("click",menu)
document.querySelector('.fa-images').parentElement.addEventListener("click",menu)
document.querySelector('.fa-calendar-alt').parentElement.addEventListener("click",menu)
document.querySelector('.fa-hand-point-right').parentElement.addEventListener("click",menu)
document.querySelector('.fa-envelope').parentElement.addEventListener("click",menu)