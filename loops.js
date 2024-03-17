const list = new Array(
    'sp',
    'rs',
    'rj'
);
const age = 20;
const estaAcompanhada = true;
let pass = true;
const destino = 'rj';

console.log('\n destino possiveis');
console.log(list);


const compra = age >= 18 || estaAcompanhada == true;

let cont = 0;

while (cont < 3) {
    if (list[cont] == destino) {
        console.log('existe')
    }
    else{
        console.log('nao existe')
    }
    cont += 1;
}