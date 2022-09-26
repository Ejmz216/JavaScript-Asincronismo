function makingOrder(orden) {
    console.log(`Ready  ${orden}`);
}


function order(orden, callback) {
    console.log(`Taking order ${orden}`);
    setTimeout(() => {
        callback(orden)
    }, 2000)
    console.log(`Doing order ${orden}`,);
}

order('Burger', makingOrder);