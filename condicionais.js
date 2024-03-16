const list = new Array(
    'sp',
    'rs',
    'rj'
);
const age = 20;
const estaAcompanhada = true;
const pass = true;
// if (age >= 18) {
//     list.splice(1, 1);
// }
// else if (estaAcompanhada == true) {
//     console.log('está acompanhado');
//     list.splice(1, 1);
// }
// else {
//     console.log('não é maior de idade');
// }

if (age >= 18 || estaAcompanhada == true) {
    list.splice(1, 1);
}
else {
    console.log('não é maior de idade');
}

console.log("embarque: \n" );
if(age >= 18 && pass){
    console.log("boa viagem");
}
else{
    console.log('não pode')
}
console.log(list);

// console.log(age > 18);
// console.log(age < 18);
// console.log(age >= 18);
// console.log(age <= 18);
// console.log(age == 18);