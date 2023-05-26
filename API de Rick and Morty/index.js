//busca una api que ofrezca informacion de interes consumirla para obtener la data
//utilizando promesas y luego poder manipularla o mostrarla por pantalla

//generar peticion a la api de los personajes 
//enviar imagenes al html a traves del dom
//crear elementos html donde guardamos los datos
//necesitamos:contenedor y etiqueta para las imagenes ,la promesa
//la peticion,enviar los datos recibidos a nuestro html y mensaje de error.

//cremos el div desde el dom
let imgContenedor=document.createElement("div");
imgContenedor.id="img-container";
imgContenedor.classList.add("img-container");
//enviamos todo al body
document.body.appendChild(imgContenedor)

fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data=>{data.results.forEach(result =>{
    //url de todas las imagenes
    const imagenUrl=result.image;
    //creamos individualmente cada etiqueta imagen para cada url de cada imagen
    const imgElement=document.createElement('img');
    imgElement.classList.add("img-element");

    //relacionamos las img con los links de cada imagen
   imgElement.src=imagenUrl;//con el atributo src le incorporo la url de cada imagen
   //agregamos a cada uno dentro del contenedor div
   imgContenedor.appendChild(imgElement);
   
});})
.catch(error=>console.error(error,"no se resolvio la peticion"));