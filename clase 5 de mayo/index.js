import { dato } from "./jason.js";
const user = JSON.parse(dato);

const table = document.getElementById('tabla');
user.forEach(Element => {

    const fila = document.createElement("tr");

    const celdaName = document.createElement("td");
    celdaName.textContent = Element.name.first;
    fila.appendChild(celdaName);

    const celdaLocation = document.createElement("td");
    celdaLocation.textContent = Element.location.street.name;
    fila.appendChild(celdaLocation);

    const celdaimg = document.createElement("td");
    const imagen = document.createElement("img");
    imagen.src = Element.picture.thumbnail;
    celdaimg.appendChild(imagen);
    fila.appendChild(celdaimg);

    table.appendChild(fila);

});
