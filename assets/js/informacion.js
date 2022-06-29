//Aqui creo una funcion Principal, una Promesa con bloques Try y Catch, que hace fetch al json y lo devuelve en formato trabajable

const obtenerDatos = (()=>{
    
    try {const llamada = async ()=>{
        const dato = await fetch("./animales.json")
        const datoFinal = await dato.json();
        return datoFinal
    }
    return{
        llamada
    }
    }
    catch(err){alert("Favor Verificar integridad de los Archivos" + err)}
})()

//Aca comienzo a Trabajar el DOM tomando algunos id para mostrar la imagen dependiendo del animal seleccionado

var animal = document.getElementById("animal")
var preview = document.getElementById("preview") 

//EvenListener al change del Dropdown
animal.addEventListener("change", async()=>{

    //datos del json segun lo devuelto por la llamada
    const  {animales}  = await obtenerDatos.llamada();

    //DOM el animal seleccionado
    const recibirValor = animal.value;

    //busqueda del Animal seleccionado en el json
    const encontrar = animales.find(a=> a.name === recibirValor)

    //ruta utilizable de la imagen
    const ruta =`./assets/imgs/${encontrar.imagen}`

    //ejecuto la funcion segun la ruta anterior
    mostrarImagen(ruta)
})
// funcion que modifica el DOM
function mostrarImagen(ruta){
    preview.innerHTML=""
    preview.style.backgroundImage = `url(${ruta})`
}

//exporto la funcion principal

export {obtenerDatos}

