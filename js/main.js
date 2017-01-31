(function(){
	// Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");
 
	// Funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
            input=document.createElement('input')
            icono = document.createElement("span");
			contenido = document.createTextNode(tarea);
 
		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}
 
		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
        // Le establecemos un atributo input con checkbox
        input.setAttribute("name", "lis");
        input.setAttribute('Type', 'checkbox');
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
        // Agrergamos el icono de borrar con un span
        icono.className = "glyphicon  glyphicon-trash , icon , pull-right";
		// Agrergamos el enlace (a) a la nueva tarea (li)
        nuevaTarea.appendChild(input);
		nuevaTarea.appendChild(enlace);
        nuevaTarea.appendChild(enlace);
        nuevaTarea.appendChild(icono);
        
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);
 
		tareaInput.value = "";
 // para eliminar los elementos con mi icono
    var eliminar = document.getElementsByClassName("icon");
        for (var c = 0; c < eliminar.length; c++) {
         eliminar[c].onclick = function(){
          var lista = this.parentElement;
          lista.style.display = "none";
  			this.parentNode.removeChild(this);
			}
		}
 
	};
    
	var comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};
 
	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};
 
	// Eventos
 
	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);
 
	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);
 	
}());