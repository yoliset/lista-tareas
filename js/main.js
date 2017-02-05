function drawTextList(){
      var input = document.getElementById("mensaje");
      var valorInput = input.value;
      if( valorInput!== ""){ 
      var listaTareas = [ {nombre: valorInput, isDone:false} ];
      var lista = document.getElementById("lista");
      for(var i in listaTareas){
              var html = "<li> <input id = 'mp' type = 'checkbox' " + (listaTareas[i].isDone?"checked":"") +  ">" + 
             listaTareas[i].nombre + "<span class='glyphicon  glyphicon-trash , icon , pull-right'>" + "</span>" +"</li>";
             lista.innerHTML += html;
        }
     var valorInput = document.getElementById("mensaje").value="";
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