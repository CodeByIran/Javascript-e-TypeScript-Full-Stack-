// Luiz Otavio Miranda tem 30 Anos, pesa 84 kg 
// tem 1.8 de altura e seu ICM é de 25.48905739856
// Luiz Otavio nasceu em 1980

const nome = "Luiz Otavio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;
let indeceMassaCorporal; 
let anoNascimento;
indeceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2019 - idade;

console.log(`Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos, peso ${peso}kg, ${alturaEmM} de altura e meu IMC é ${ indeceMassaCorporal}. Eu nasci em ${anoNascimento}.`);

// console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')
// console.log('tem', alturaEmM, 'de altura e seu ICM é de', indeceMassaCorporal);
// console.log(nome, 'nasceu em', anoNascimento, '.');  