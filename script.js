// Script
var pendientes = [
    {descripcion: "Tarea de Agenda de JS", completado: false}, //para este vale 0
    {descripcion: "comer", completado: false}, //para este 1
    {descripcion: "Dormir", completado: true}, //para este 2
    {descripcion: "cortarse el pelo", completado: false}, //para este 3
    
];


function imprimirPendiente(pendiente, index){ //pendiente es para ver si sigue pendiente y también se escribe con pendiente.descripcion. el index es cual numero
    var lista = document.getElementById("lista");
lista.insertAdjacentHTML('beforeEnd', `<li ` + estaCompletado(pendiente.completado) + 
` onClick="marcarCompletado(` + index + `)"> 
<div class="checkbox">
<i class="fa fa-check"></i>
</div>
<div class="descripcion">` + pendiente.descripcion + `</div>
</li>` 

    );
   }

function estaCompletado(completado){
if (completado){
    return 'class="done pendiente"';
}else{
    return 'class="pendiente"';
}
}
function marcarCompletado(index){
//var pendientesInterfaz = document.getElementsByClassName("pendiente");
//pendientesInterfaz[index].classList.toggle("done");
pendientes[index].completado = !pendientes[index].completado // ! significa contrario al valor que tienes. si es falso es verdadero, si es verdadero es falso
imprimirTodosLosPendientes();

}
function imprimirTodosLosPendientes(){
document.getElementById("lista").innerHTML = "";
pendientes.forEach(imprimirPendiente); //aqui va contando uno por uno, 0, 1, 2, etc.
}

imprimirTodosLosPendientes();




 

