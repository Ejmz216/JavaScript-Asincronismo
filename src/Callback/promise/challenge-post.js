import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors', // Permisos que tiene, siempre estará en cors (Cross-Origin Resource Sharing)
        credentials: 'same-origin', // Si no hay ninguna autenticación, no está pasando nada
        headers: {
            'Content-Type': 'application/json' // cabeceras que vamos a enviar en la solicitud
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "212",
    "price": 212,
    "description": "A description",
    "categoryId": 1,
    "images": [
        "https://placeimg.com/640/480/any"
    ]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));