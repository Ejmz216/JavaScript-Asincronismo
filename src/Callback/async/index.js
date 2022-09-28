const FuncionAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 2000)
            : reject(new Error('Error!'));
    });
}

const OtraFN= async () => {
    const somethig = await FuncionAsync();
    console.log(somethig);//
    console.log('Hola!');
}

console.log('ANTES');
OtraFN();
console.log('DESPUES');