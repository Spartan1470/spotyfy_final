import{URI,token,PARAMETROS_PETICION} from './costantes.js'

async function get_API(){
    let respuesta=await fetch(URI,PARAMETROS_PETICION)
    let canciones=respuesta.json()
   return(canciones);
}
let resultados=await get_API()
console.log(resultados);
