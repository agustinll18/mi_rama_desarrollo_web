//ESTO ES PARA LA PANTALLA DE CARGA 
window.onload=function(){
    var contenedor=document.getElementById('animate');

    contenedor.style.visibility='hidden';
    contenedor.style.opacity='0'
}
//ESTO ES PARA EL DESVANECIDO DEL VIDEO

let video = document.getElementById("video");
window.addEventListener('scroll', function(){
	let value = 1 + window.scrollY/-1200;
	video.style.opacity= value;
})
