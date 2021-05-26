// ------------------- Exercício 1 --------------------------------
// Exercício de interpretação de código

/* 1 - Mensagem impressas no console.log SEM EXECUTAR O PROGRAMA

a - false
b - false
c - true
d - Boolean */

// ------------------- Exercício 2 --------------------------------
// Exercício de interpretação de código

/* Sempre as entradas pelo prompt serão STRINGS, por isso não é possivel fazer esse calculo.!
Será impresso no console.log o valor de entrada do primeiroNumero colado ao valor de entrada do segundoNumero

Ex primeiroNumero 15 e segundoNumero 20
será impresso no console.log 1520 */


// ------------------- Exercício 3 --------------------------------

/* Para fazer a soma o ideal é fazer conversão desses Strings para Number
Ficaria assim

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Dgite outro numero!"))

Agora sim será efetuada a somna! */

// ---------------------------------------- Exercício Escrita de Código --------------------------------------

// Exercício 1

//Pergunte a idade do usuário
//Pergunte a idade do seu melhor amigo ou da sua melhor amiga
//Imprima na console a seguinte mensagem: "Sua idade é maior 
//do que a do seu melhor amigo?", seguido pela resposta (true ou false)
// Imprima na console a diferença de idade (não tem problema se sair um número negativo)

/*let idade = Number(prompt("Qual sua idade?"))
let idadeAmigo = Number(prompt("Qual idade do seu melhor amigo?"))
const idadeMaiorAmigo = idade > idadeAmigo
const diferencaIdade = idade - idadeAmigo

console.log("Sua idade é maior do que a do seu amigo?", idadeMaiorAmigo)
console.log("A diferença de idade entre você e seu amigo é de", diferencaIdade, "anos")*/

//-------------------------------------------------------------------------------------------------------------

// Exercício 2
/*
// a) Peça ao usuário que insira um número **par**
let numeroPar = Number(prompt("Insira um número PAR"))

// b) Imprima na console **o resto da divisão** desse número por 2.
console.log(numeroPar % 2)

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Sim, sempre retorna 0 pois todos os numeros pares não terão resto quando dividos por 2


// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
//Retorna 1, pois agora sim resta algum número no cálculo.
*/
//-------------------------------------------------------------------------------------------------------------

// Exercício 3

/* const idade = Number(prompt("Insira sua idade"))

// a) A idade do usuário em meses
console.log("Sua idade é de", (idade*12), "meses")

// b) A idade do usuário em dias
console.log("Sua idade é de", (idade*365), "dias")

// c) A idade do usuário em horas
const dia = 24 // 24 horas = 1 dia
const anoEmHoras = dia*365+6 // 24 horas * 365 dias + 6 horas anuais que somadas darão o ano bissexto
// Em uma pessoa com 50 anos de idade a diferença são de 300 horas quando se inclui essas 6 horas anuais.
// Equivalentes a 12 dias e meio

console.log("Sua idade em horas são",(idade*anoEmHoras)) */

// Exercício 4
// Faça um programa que pergunte ao usuário dois números.
// Em seguida, faça as operações e imprima no console as seguintes mensagens:
/*
let primeiroNumero = Number(prompt("Insira um número maior que 10"))
let segundoNumero = Number(prompt("Insira um número até 10"))



// O primeiro numero é maior que segundo? true
console.log("O primeiro numero é maior que segundo?", primeiroNumero>segundoNumero)
// O primeiro numero é igual ao segundo? false
console.log("O primeiro numero é igual ao segundo?", primeiroNumero == segundoNumero)
// O primeiro numero é divisível pelo segundo? true
console.log("O primeiro numero é divisível pelo segundo", (primeiroNumero%segundoNumero===0))
// O segundo numero é divisível pelo primeiro? true
console.log("O segundo numero é divisível pelo primeiro?", (segundoNumero%primeiroNumero===0))
*/



//-------------------------------------------------------------------------------------------------------------
//--------------------------------------------- D E S A F I O -------------------------------------------------

//a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
//const kelvin = (77 - 32)*(5/9) + 273.15

//console.log("77°F convertido em Kelvim é igual a:", kelvin)

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
// const fahrenheit = 80*(9/5) + 32

// console.log("80°C convertidos em FAHRENHEIT é igual a:", fahrenheit)


// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
// const fahrenheit30 = 30*(9/5) + 32
// const kelvin30 = (30 - 32)*(5/9) + 273.15
// console.log(" 30°C convertidos em FAHRENHEIT é igual a:", fahrenheit30)
// console.log(" 30°C convertido em Kelvim é igual a:", kelvin30)

// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

// let grausCelsius = Number(prompt("Insira os Graus Celsius que deseja converter"))
// const converteF= grausCelsius*(9/5) + 32
// const converteK = (grausCelsius - 32)*(5/9) + 273.15
// console.log(grausCelsius+"°C convertidos em FAHRENHEIT é igual a:", converteF)
// console.log(grausCelsius+"°C convertido em Kelvim é igual a:", converteK)

// // ----------------------------------- Exercício 2 -------------------------------------------------------

// //a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
// const valorPorHora = 0.05
// const uso = 280
// const resultado1 = valorPorHora*uso
// console.log("O valor a ser pago pelo consumo de", uso," KWh, é de R$",resultado1)
// b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a 
// ser pago pela mesma residência acima considerando 15% de desconto
// const desconto = 15/100
// const resultado2 = resultado1*desconto

// console.log("Você recebeu 15% de desconto. O valor atual de sua conta é de R$",resultado1-resultado2)

// -------------------------------------Exercício 3 ------------------------------------------------------

// a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que
//converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
//20lb equivalem a X kg

let libras = 1

const  conversaoLbKg = ((20*libras)* 0.453592)
console.log("20lb equivalem a",conversaoLbKg,"Kg")

// b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg.
//Imprima  a resposta no console da seguinte forma: 
//10.5oz equivalem a X kg

let oz = 1
kg = 0.0283495
conversaoOzKg = (10.5*oz*0.0283495)
console.log("10.5 oz equivalem a",conversaoOzKg,"Kg")

// c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m.
//Imprima  a resposta no console da seguinte forma: 
//100mi equivalem a X m

let milhas = 1

const milhasEmMetros = (milhas*100) * 1600 // 1 milha valem 1600 metros

console.log("100 mi equivalem a", milhasEmMetros+"m")

//d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m.
//Imprima  a resposta no console da seguinte forma: 
// 50ft equivalem a X m

let pes = 1

const pesEmMetros = (pes*50*0.3048) 
console.log("50ft equivalem a", pesEmMetros+"m")

// e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro.
//Imprima  a resposta no console da seguinte forma: 
//103.56gal equivalem a X l

let gal = 103.56

const galEmLitros = (gal*3.785412)
console.log("103.56gal equivalem a", galEmLitros+"l")

//f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro.
//Imprima  a resposta no console da seguinte forma: 
//450 xic equivalem a X l

let xicara = 450
const xicEmLitros = (xicara*0.24)
console.log("450 xic equivalem a",xicEmLitros+"l")

//g) Escolha ao menos **um** dos itens anteriores e 
//modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter


let libra = Number(prompt("Digite o numero de libras que você deseja converter em Kg"))

const  lbEmKg = (libra * 0.453592)
console.log(libra+"lb equivalem a",lbEmKg,"Kg")
