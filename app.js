// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de 
// programación. Aquí deberás desarrollar la lógica para resolver el problema.

// VARIABLES
let nombresAmigos = [];


// Agregar amigos al array
function agregarAmigo(){
    // Obtener el valor del input
    let nombre = document.getElementById("amigo").value;

    // Validar si el input está vacío
    if(nombre === ""){
        alert('Por favor, ingrese un nombre');
        return;

    } else {
        //Incluir el nombre en el array
        nombresAmigos.push(nombre);
        console.log(nombresAmigos);
        limpiar();
        
        // Mostrar la lista de amigos
        mostrarListaAmigos();

        return nombre;
    }


};

// Limpiar el input
function limpiar(){
    document.getElementById("amigo").value = "";
};


// Mostrar un nombre al azar
function mostrarAmigo(){

    // Validar si el array no está vacio
    if(nombresAmigos.length === 0){
        asignarTextoElemento('ul', 'No hay amigos agregados');
    } else {
        // Obtener un número al azar entre 0 y la longitud del array
        let numeroAleatorio = Math.floor(Math.random() * nombresAmigos.length);
        
        // Asignar el nombre al elemento HTML
        asignarTextoElemento('ul', nombresAmigos[numeroAleatorio]);
    }
};

// Asignar texto
function asignarTextoElemento(elemento, texto) {
    let elementoHtnml = document.querySelector(elemento);
    elementoHtnml.innerHTML = texto;
    return;
};

// Mostar lista de amigos
function mostrarListaAmigos(){
    //Mostrar los amigos que van ingresando al array en una lista
    let lista = document.getElementById("listaAmigos"); 
    
    // Limpiar la lista antes de agregar nuevos elementos
    lista.innerHTML = '';
    
    //Llenr la lista con los valores del array
    nombresAmigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
    
};