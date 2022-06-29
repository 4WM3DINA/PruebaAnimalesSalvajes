//Importacion desde los otros archivos
import { obtenerDatos } from "./informacion.js";
import {Aguila, Leon, Oso, Serpiente, Lobo } from "./animales.js";

//Devuelve la ruta necesaria
const obtenerSonido = async(animal)=>{
    const { animales } = await obtenerDatos.llamada();
    const { sonido } = animales.find(e=>e.name === animal)
    return sonido
}

//elementos del DOM segun IDs y creacion de un array vacio que contiene los sujetos en investigacion
const registrar = document.getElementById("btnRegistrar")
const nombre = document.getElementById("animal")
const edad = document.getElementById("edad")
const comentarios = document.getElementById("comentarios")
const contador = [];

//EventListener en el boton registrar
registrar.addEventListener("click", async ()=>{

    //ruta de la imagen actualmente guardada en el preview 
    const imgPreview = document.getElementById('preview').style.backgroundImage;

    //ruta de lo que no necesito
    const imgRuta = imgPreview.slice(5, imgPreview.length - 2);

    //un nuevo objeto y asignado a la clase correspondiente con sus valores
    if (validar(nombre, edad, comentarios)){

        const sonido = `./assets/sounds/${await obtenerSonido(nombre.value)}`

        //declaracion de una variable vacia y asignada al objeto creado
        var sujeto;
        switch(nombre.value){
            case "Leon":
                sujeto = new Leon(nombre.value, edad.value, imgRuta, comentarios.value, sonido)
                break;
            case "Aguila":
                sujeto = new Aguila(nombre.value, edad.value, imgRuta, comentarios.value, sonido)
                break;
            case "Oso":
                sujeto = new Oso(nombre.value, edad.value, imgRuta, comentarios.value, sonido)
                break;
            case "Serpiente":
                sujeto = new Serpiente(nombre.value, edad.value, imgRuta, comentarios.value, sonido)
                break;
            case "Lobo":
                sujeto = new Lobo(nombre.value, edad.value, imgRuta, comentarios.value, sonido)
                break
        }
        //agrego la variable al array
        contador.push(sujeto)
        //limpieza del formulario 
        limpiar()
        //card de bootstrap
        carta(contador)
        //modal de bootstrap
        modal(contador)

    } 
})
//  funcion limpiar, que simplemente devuelve todo al inicio
const limpiar = ()=>{
    nombre.value= "Seleccione un animal"
    edad.value= "Seleccione un rango de años"
    comentarios.value=""
    let imagenDefault = document.getElementById("preview")    
    imagenDefault.style.backgroundImage= `url("./assets/imgs/lion.svg")`
}
//DOM del lugar a colocar las Cards
const muestra = document.getElementById("Animales")
const carta = (contador)=>{
    //lo vacio
    muestra.innerHTML = ""
    contador.forEach((element, index) => {
        var modificar = ""
         switch(element.getName()){
            case "Leon":
                modificar = element.rugir()
                break;
            case "Aguila":
                modificar = element.chillar()
                break;
            case "Oso":
                modificar = element.gruñir() 
                break;
            case "Serpiente":
                modificar = element.sisear()
                break;
            case "Lobo":
                modificar = element.aullar()
                break
        } 
        //estilos del Card
            muestra.innerHTML += `<div class="border border-white my-1 mx-2 card text-white bg-secondary">
                                    <img src="${element.getImg()}" style="width:10rem; cursor: cell"  class="card-img-top" alt="..." data-toggle="modal" data-target="#${element.getName()}${index}">
                                        <div class="card-list p-1" style="cursor: pointer" onclick="reproducir('${modificar}')">
                                        <span><img height="15rem" src="./assets/imgs/audio.svg"/></span>
                                        </div>
                                    </div>`
    });   
}
// reproducion de los sonidos 
window.reproducir = (rutaSonido) => {
    const audio = new Audio(rutaSonido);
    audio.play();
}
// funcion validar que prueba que no esten en default cada uno de los campos
const validar = (nombre, edad, comentarios) => {
    if ((nombre.value !== 'Seleccione un animal') && (edad.value !== 'Seleccione un rango de años') && comentarios.value !== "") {
        return true;
    } else {
        alert("Favor asegurese de completar todos los datos");
    }
}
//Esta parte es buena, genera el Modal segun todo lo que este en constante, modifique un poco la estructura solicitada para poder usar el setter de comentario
const modal = (constante)=>{
    const divModal = document.getElementById("modal")
    divModal.innerHTML = ""
    constante.forEach((element, index)=>{
        var modificar = ""
        switch(element.getName()){
            case "Leon":
                modificar = element.rugir()
                break;
            case "Aguila":
                modificar = element.chillar()
                break;
            case "Oso":
                modificar = element.gruñir() 
                break;
            case "Serpiente":
                modificar = element.sisear()
                break;
            case "Lobo":
                modificar = element.aullar()
                break
        }
                //creo un boton aparte del de cerrar el boton, para modificar el comentario actual, muy orgulloso de haberlo logrado
                divModal.innerHTML += `<div class="modal bd-example-modal-sm text-white fade" id="${element.getName()}${index}" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                                            <div class="modal-dialog">
                                                <div class="modal-content bg-dark text-center">
                                                    <div class="modal-header justify-content-center">
                                                        <h2 class="modal-title" id="staticBackdropLabel">${element.getName()}</h2>
                                                    </div>
                                                    <div class="modal-body row">
                                                    <div class="col-12 col-md-12">
                                                    <img class="img-fluid" src="${element.getImg()}" alt="">
                                                    <div class="card-list bg-secondary p-1" style="cursor: pointer" onclick="reproducir('${modificar}')">
                                                    <span><img height="35rem" src="./assets/imgs/audio.svg"/></span>
                                                    </div>
                                                    </div>
                                                    
                                                    <div class="col-12 col-md-12">
                                                    <h5><u>Edad</u></h5>
                                                    <p>${element.getAge()}</p>
                                                    <h5><u>Comentarios</u></h5>
                                                    <p>${element.getComments()}</p>
                                                    <h5><u>Modificar Comentarios</u></h5>
                                                    
                                                    <textarea name="" id="${index}Texto" rows="5" class="form-control">${element.getComments()}\r\n</textarea>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`
              const cambiarDatos = document.getElementById(`${index}Cambio`)
                const comentario2 = document.getElementById(`${index}Texto`)
                //aca creo el eventListener en el boton creado, que ejecuta el setter del comentario del objeto en cuestion, luego borra todo y lo crea nuevamente con el comentario actualizado
                cambiarDatos.addEventListener("click", ()=>{
                        var nuevoComentario = comentario2.value
                        element.setComments(`${nuevoComentario}`)
                        carta(contador)
                        modal(contador)
                })
    })
}
