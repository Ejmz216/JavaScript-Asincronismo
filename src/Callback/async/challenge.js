import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

// Funcion CONVENCIONAL asincrona que hace la cnoexión con la API 
async function fetchData(urlApi) {
    const response = await fetch(urlApi);// utiliza await oara hacer el fetch a la api 
    const data = await response.json();// convierte las lineas traidas desde la api en objetos por meido de Json
    return data;//retorna el objeto 
}

// Funcion ARROW async  
const anotherFunction = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);

    } catch (error) {
        console.error(error);
    }
}

anotherFunction(API);
