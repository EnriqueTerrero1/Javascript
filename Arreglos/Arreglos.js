window.onload= Main;

var names=[];
function Main(){
    var buttonAgregar = document.getElementById("btnAgregar");
    buttonAgregar.addEventListener("click",Agregar)
}

function Agregar(){

var name = document.getElementById("nombretxt");
var nameValue=name.value;
names.push(nameValue);
MostrarNames();

}
function MostrarNames(){

    var Listado = document.getElementById("Listado");
    var html = "";
    debugger;
    
    for(n of names){

        html+= n + "<br/>";

    }

    Listado.innerHTML= html;

}