window.onload = iniciar;

function iniciar(){
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click",clickBtnAgregar);
    mostrarNotas();
}

function clickBtnAgregar(){

    var nombres = [];
    nombres = JSON.parse(localStorage.txtNombre);
    var txtNombre = document.getElementById("txtNombre").value;

    localStorage.txtNombre=txtNombre;
mostrarNotas();
 
}

function mostrarNotas(){
    var divNombres = document.getElementById("nombres");


    var nombres = JSON.parse(localStorage.txtNombre);

    html ="";
    for (var n of nombres){

html += n +"</br";
    }
    divNombres.innerHTML+= localStorage.txtNombre+"<br>";
}