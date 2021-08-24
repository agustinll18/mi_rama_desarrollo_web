let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");
window.addEventListener('scroll', function(){
    var value = window.scrollY;
    bg.style.top = value * 0.75 + 'px';
    moon.style.left = -value * 0.5 +'px';
    mountain.style.top = -value * 0.25 + 'px';
    road.style.top = value * 0.05 +'px';
    text.style.top = value * 1.9+ 'px';
	
});
//PANTALLA DE CARGA
window.onload=function(){
var contenedor=document.getElementById('animate');

contenedor.style.visibility='hidden';
contenedor.style.opacity='0'
}