import{generarToken}from "./generarToken.js"
import{generarURI} from './generadorURI.js'
import{consumirAPI} from './servicio.js'

//detectar el clic en el boton del formulario
let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){

    evento.preventDefault()
    
    let frutaSeleccionada=document.getElementById("fruta").value
    let URI=generarURI(frutaSeleccionada)

    let TOKEN=generarToken()
    async function activarAPI(){
        let datosConsultadosAPI= await consumirAPI(URI,TOKEN)
        console.log(datosConsultadosAPI)
    }

    activarAPI()
    
    


})