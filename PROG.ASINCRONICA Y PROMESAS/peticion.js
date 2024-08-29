//variables globales
let btnConsultar = document.querySelector(".btn-consultar");
let resultado = document.querySelector(".resultado");
// evento al bton para consultar datos
btnConsultar.addEventListener("click", () =>{
    //alert("estamos melos");//
    obtenerPeliculas();
});


//Funcion para realizar la peticion a la url de la api
async function obtenerPeliculas(){
    try {
        let url = "http://localhost/apiPeliculas/peliculas.txt";
        let respuesta = await fetch(url,{
            method: "GET",
            headers:{
                "Content-type":"application/json"
            }
        });
        // console.log(respuestas)
        let datos= await respuestas.json();
        datos.forEach((pelis,pos))=>{
            resultado.innerHTML +=''
            
        }
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
    
}