// ------------------------------------Exercícios de interpretação de código--------------------------------------------------
// 1

/*let array
console.log('a. ', array)
// undefined - a variavel foi declarada e não há valor
array = null
console.log('b. ', array)
// undefined = definida como NULL, mesmo assim aparece undefined
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// 11 - contou os elementos da array
let i = 0
console.log('d. ', array[i])
// 3 - index 
array[i+1] = 19
console.log('e. ', array)
// index é o 0, 0+1 entra no elemento 1 que tem o valor 4 e agora recebe o valor 19
const valor = array[i+6]
console.log('f. ', valor)
// 0+6 entra no elemento de posição 6 que é o 9, por isso imprime 9 */


// 2
/*
```jsx
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
```

Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`? */

// SUBI NUM ÔNIBUS EM MIRROCOS 27

//-------------------------------------------------- Exercícios de escrita de código ----------------------------------------
// 1
// Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
// O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
/*
const nome = prompt('Digite seu nome')
const email = prompt('Digite seu e-mail')

console.log("O e-mail "+email+" foi cadastrado com sucesso. Seja bem-vindo(a), "+nome+"!") */

//2 Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
/*
let comidas = ["lasanha", "pizza", "batata frita", "churrasco", "x-tudo"]

// a) Imprima na tela o array completo
console.log(comidas)

// b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
 let novaLista = comidas.toString().replaceAll(",", "\n")
 console.log("Essas são as minhas comidas preferidas: ",novaLista)
// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
//Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
comidas[1] = prompt("digite sua comida favorita")
console.log(comidas) */


//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
/*
const listaDeTarefas = []

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

listaDeTarefas.push(prompt("Insira uma tarefa diária"))
listaDeTarefas.push(prompt("Insira uma tarefa diária"))
listaDeTarefas.push(prompt("Insira uma tarefa diária"))
// c) Imprima o array na tela

console.log(listaDeTarefas)
// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

let realizado = Number(prompt("Digite a tarefa que ja foi realizada"))
// e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(1,realizado)

// f) Imprima o array na tela
console.log(listaDeTarefas) */