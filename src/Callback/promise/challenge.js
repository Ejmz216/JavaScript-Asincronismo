import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function ObtenerDatos(urlApi) {
    return fetch(urlApi);
}

ObtenerDatos(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products)
        return ObtenerDatos(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title);
        return ObtenerDatos(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));