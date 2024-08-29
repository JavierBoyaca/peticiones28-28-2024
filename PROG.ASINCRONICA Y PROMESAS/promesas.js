//datos de una base de datos
let Peliculas = [
    {
        "nombre":"Spiderman",
        "Lanzamiento": 2008,
        "Genero":"Accion",
        "sinopsis":"A un estudianto lo pico una araña",
        "imagen":"https://media.vandal.net/i/1280x720/10-2023/17/202310171642263_5.jpg"
    },
    {
        "nombre":"Rapido y furioso",
        "Lanzamiento": 2002,
        "Genero":"Accion",
        "sinopsis":"Primero la familia",
        "imagen":"https://www.universalpictures-latam.com/tl_files/content/movies/fast9/posters/01.jpg"
    },
    {
        "nombre":"la llorona ",
        "Lanzamiento": 2015,
        "Genero":"Terror",
        "sinopsis":"Una mamá que perdio a sus hijos",
        "imagen":"https://fotografias.larazon.es/clipping/cmsimages01/2019/08/09/612F9C35-48D0-4B55-AA11-4C66AF8B6DC7/98.jpg?crop=839,472,x0,y92&width=1900&height=1069&optimize=low&format=webply"
    }
];



//funcion para obtener los datos
function obtenerPeliculas ( pelis ){
    return new Promise((resolve, reject)=>{

         //simular retraso de la informacion
    setTimeout(()=>{
        //validar si hay datos en la BD
        if(pelis.length > 0) {
            resolve (pelis);

        } else{
            reject("Error inesperado, No hay datos");
        }
        

    }, 2000);
    });
   
    
}

//mostrar informacion en la consola del navegador
//console.log( obtenerPeliculas(Peliculas) );
//forma1 -> then()/ catch()
// obtenerPeliculas(Peliculas)
// .then((d)=>console.log(d))
// .catch((error)=>console.log(error));
//forma 2 -> async / await
async function mostarDatos(movies){
    try{
        let datos = await obtenerPeliculas(movies);
        console.log(datos);
    }catch (error){
        console.log(error);
    }
}
mostarDatos(Peliculas);

