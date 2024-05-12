const PORT = 3001;
const API_URL = `http://localhost:${PORT}/locales`

function obtenerLocales(){
    fetch(API_URL)
    .then(response => response.json())
    .then(locales => cargarLocales(locales));
}

function obtenerLocalesInterior(){
    console.log("hola")
    fetch(API_URL + '/interior')
    .then(response => response.json())
    .then(locales => cargarLocales(locales));
}

obtenerLocales();

function cargarLocales(locales){
    let contenido = "";

    locales.forEach(l => {
        contenido += `
        <tr>
            <th scope="row">${l.storeNumber}</th>
            <td>${l.storeName}</td>
            <td>${l.streetAddress}</td>
            <td>${l.city}</td>
            <td>${l.latitude}</td>
            <td>${l.longitude}</td>
        </tr>`
    });

    document.getElementById('datos').innerHTML = contenido;
}