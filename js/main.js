function drawTextList(){
      var input = document.getElementById("messages");
      var valorInput = input.value;
      if( valorInput!== ""){ 
          var listaTareas = [ {nombre: valorInput, isDone:false} ];
          var lista = document.getElementById("lista");
          for(var i in listaTareas){
                  var html = "<li> <input id = 'mp' type = 'checkbox' " + (listaTareas[i].isDone?"checked":"") +  ">" + 
                 listaTareas[i].nombre + "<span class='glyphicon  glyphicon-trash , icon , pull-right'>" + "</span>" +"</li>";
                 lista.innerHTML += html;
            }
         var valorInput = document.getElementById("messages").value="";
         removeText();
     }
}
//Elimina mi elemento li, Span con mi icono
function removeText(){
     var eliminar = document.getElementsByClassName("icon");
         for(var u = 0; u< eliminar.length; u++){
             eliminar[u].onclick = function(){
             var lista = this.parentElement;
             lista.style.display = "none";
       }
    }
}
//Funccion para crear un div , el cual informara al usuario, que se tiene que escribir una tarea. 
function mostrarMensaje(_idInput, _mensaje, mode=false){
    var elemento = document.getElementById(_idInput);
    //verifica si esta creado mi div 
    if (mode) {
        if ( !elemento) {
            elemento = document.createElement("div");
            elemento.id = _idInput;
            elemento.classList.add("caja1");
        }
        elemento.innerHTML = _mensaje;        
        elemento.style.display="block";
        
        var myForm = document.getElementById("myForm");
        myForm.appendChild(elemento);
    }
    else {
        var message = document.getElementById("mia");
        if (message)
            message.style.display="none";
    }
}
function mensajes(){
    var message = document.getElementById("messages").value;
    if((messages.value) === "") {
        mostrarMensaje("mia", 'Es obligatorio, añadir una tarea, porfavor!!', true);
        
    } else {
        mostrarMensaje();
    }
    drawTextList();
}