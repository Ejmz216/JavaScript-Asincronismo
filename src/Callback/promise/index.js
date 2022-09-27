const Promesa = new Promise(function (resolve, reject) {
    resolve('hey!')
});

const vacas = 9;
const contarVacas = new Promise(function (resolve, reject) {
    if (vacas > 10) {
        resolve(`Tenemos ${vacas} vacas en la granja`);
    }  else 
    {
        reject('No hay vacas en la granja');
    }
});

contarVacas.then((result) => {
    console.log(result);
}) .catch((err) => {console.log(err);}).finally(() => {console.log('done');});