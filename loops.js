const list = new Array(
    'sp',
    'rs',
    'rj'
);
const age = 20;
const estaAcompanhada = true;
let pass = true;
const destino = 'rs';

console.log('\n destino possiveis');
console.log(list);


const compra = age >= 18 || estaAcompanhada == true;

let cont = 0;
let destinoexist = false;
while (cont < 3) {
    if (list[cont] == destino) {
        console.log('existe');
        destinoexist = true;
        break;
    }
    cont += 1;
}

console.log('destino: ', destinoexist);

if(pass && destinoexist){
    console.log('boa viagem');
}
else{
    console.log('desculpe');
}

for (let i = 0; i < 3; i++) {
    if (list[i] == destino) {
        console.log('existe');
        destinoexist = true;
        break;
    }
}