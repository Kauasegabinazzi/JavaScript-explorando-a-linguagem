const list = new Array(
    'sp',
    'rs',
    'rj'
);
const age = 10;

if(age >= 18){
    list.splice(1,1);
}
else{
    console.log('não é maior de idade')
}
console.log(list);

console.log(age > 18);
console.log(age < 18);
console.log(age >= 18);
console.log(age <= 18);
console.log(age == 18);