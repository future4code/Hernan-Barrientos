console.log("Hello World")

// ---------------------- Exercícios de interpretação de código ----------------

// 1 - Está fazendo um loop e determina que o indice sendo menor que 5, irá somar ! na variavel
// valor, que iniciou com 0 e passará a receber o valor 1 na primeira passada.
// Na segunda passada, terá o valor 2, na terceira 3 e na quarta 4. Na quinta passada ele irá parar
// pois foi declarado para que seja menor que 5 e não menor igual a 5.

//2
// a) O que vai ser impresso no console?
// todos os numeros maiores que 18

// b) Se eu quisesse acessar o **índice**
// de cada elemento dessa lista, o `for...of...` 
// é suficiente? Se sim, o que poderia ser usado para fazer isso?
// sim, usaria console.log(numero.length)


// 3

// Esse codigo recebe um numero e insere ASTERISCOS e conferme a o valor recebido
//se o valor de entrada for 4 ele irá imprimir 1* na primeira linha, 2** nas segunda linha, 3*** na terceira linha e por fim
// 4**** na quarta linha.


//---------------------- Exercícios de escrita de código -----------------------
// 1 Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

// let pets = Number(prompt("Quantos pets você tem?"))
// let contador = 0
// let nomeDosPets = []
// if (pets === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// } else{
//         while(contador < pets){
//         let inputNomeDosPets = prompt("insira o nome de seus Pets")
//         contador = contador + 1
//         nomeDosPets.push(inputNomeDosPets)
//     }
// }
// console.log(nomeDosPets)

// 2 Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente
//de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

//const arrayOriginal = [5, 7, 10, 48, 85, 3, 25, 4, 155, 20]

//a) Escreva um programa que imprime cada um dos valores do array original.

// for(let i = 0; i < arrayOriginal.length; i++){
//     console.log(arrayOriginal[i])
// }

//-----------------------------------------------------------------------------------

// //b) Escreva um programa que imprime cada um dos valores do array original.

// for(let i = 0; i < arrayOriginal.length; i++){
//     let divisao = arrayOriginal[i]/10
//     console.log(divisao)
// }

//-----------------------------------------------------------------------------------

// //c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array

// const numerosPares = []
// for(let inputNumerosPares of arrayOriginal){
//     if (inputNumerosPares % 2 === 0){
//         numerosPares.push(inputNumerosPares)
//     }
// }
// console.log(numerosPares)
 
//-----------------------------------------------------------------------------------

// d) Escreva um programa que crie um novo array contendo strings, da seguinte forma:
//  "O elemento do índex i é: numero". Depois, imprima este novo array.

// for(let i = 0; i < arrayOriginal.length; i++){
//     console.log(`o elemento do index ${i} é ${arrayOriginal[i]}`)
// }

//-----------------------------------------------------------------------------------

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

// let valorMaximo = 0
// let valorMinimo = 200
// for(let numero of arrayOriginal) {  // dar um nome para uma variavel nova
//     if(numero > valorMaximo){ // numero = 10
//       valorMaximo = numero
//     }if (numero < valorMinimo){
//         valorMinimo = numero
//     }
// }
// console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)


// 1ª parte: insere o um numero que será o correto
/*const numeroCorreto = Number(prompt("insira um numero"))

console.log("Vamos jogar!")

// 2ª parte: chutar até acertar
let chute = Number(prompt("Chute um numero"))
let contador = 1

while (chute !== numeroCorreto) {
    console.log("O número chutado foi:", chute)

    if(numeroCorreto < chute){
        console.log("Errrrrrrrou!, Queimouuu... o número é menor que esse ")
    } else{
        console.log("Errrrrrrrou!, tá friooo... o número é maior que esse ")
    }
    contador++
  

    chute = Number(prompt("Chute um numero"))
}
console.log("O numero chutado foi:", chute)
console.log("Acerrrrrrrrrrrrrrtou!")
console.log("O numero de tentativas foram:", contador)
//3ª parte: a cada chute indicar se é maior  ou menor que o correto */


// 2 -------------------------------------------------------------------------
/*
let numeroPc = Math.floor((Math.random() * 99) + 1) // Math.floor retira os números decimais 

console.log("Vamos jogar!")
let chute = Number(prompt("Chute um numero"))
let contador = 1

while (chute !== numeroPc) {
    console.log("O número chutado foi:", chute)

    if(numeroPc < chute){
        console.log("Errrrrrrrou!, Queimouuu... o número é menor que esse ")
    } else{
        console.log("Errrrrrrrou!, tá friooo... o número é maior que esse ")
    }
    contador++
  

    chute = Number(prompt("Chute um numero"))
}
console.log("O numero chutado foi:", chute)
console.log("Acerrrrrrrrrrrrrrtou!")
console.log("O numero de tentativas foram:", contador)

// neste caso não consigo pensar uma outra forma mais simples e fácil do que esta para a alteração do código. */
