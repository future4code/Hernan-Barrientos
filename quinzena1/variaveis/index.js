/*// Exercício de interpretação 1

let a = 10
let b = 10

console.log(b) 
// irá imprimir o numero 10

b = 5
console.log(a, b)
// irá imprimir 10 5 pois a variavel b recebeu um novo valor de 5

// Exercício de interpretação 2

let a = 10
let b = 20
let c
c = a // terá o valor de 10
b = c // terá o valor de 10
a = b // terá o valor de 20

console.log(a, b, c)
// irá imprimir 10 10 20


// Exercício de interpretação 3
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

/* let cargaHorariaDiaria = Number(prompt("Quantas horas você trabalha por dia?"))
let valorDaDiaria = Number(prompt ("Quanto você recebe por dia?"))
alert("Você recebe ${valorDaDiaria/cargaHorariaDiaria") */


// Exercício de escrita de código 1
/*
let nome
let idade
console.log(typeof nome)
console.log(typeof idade)
// Retornou UNDEFINED pois nenhum valor foi definido.

// Exercício de escrita de código 2

Escreva um programa que faça 3 perguntas de Sim ou Não,
armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos
a) Crie três novas variáveis, contendo as respostas

b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

let perguntaUm = prompt("Está gostando do curso?")
let perguntaDois = prompt("Está sendo fácil para você?")
let perguntaTres = prompt("Você pensa em desistir?")

let respostaPerguntaUm = perguntaUm
let respostaPerguntaDois = perguntaDois
let respostaPerguntaTres = perguntaTres

console.log("Está gostando do curso? -", respostaPerguntaUm)
console.log("Está sendo fácil para você? -", respostaPerguntaDois)
console.log("Você pensa em desistir? -", respostaPerguntaTres)


/*
// Exercício de escrita de código 3
//a
const nome = prompt("Qual o seu nome?")
//b
const idade = prompt("Qual a sua idade?")
//c
console.log(typeof nome)
console.log(typeof idade)
//d - Ambas variáreis são Strings, pois a caixa do prompt sempre receberá STRING por padrão

//e
console.log("Olá", nome,"você tem", idade, "anos") 



// Exercício de escrita de código 2

let a = 10
let b = 25
// Aqui faremos uma lógica para trocar os valores
let c
c=b
b=a
a=c
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10 

//DESAFIO ACEITO!

let primeiroNumero = Number(prompt("Digite seu primeiro número"))
let segundoNumero = Number(prompt("Digite seu segundo número"))

console.log(primeiroNumero+segundoNumero)
console.log(primeiroNumero*segundoNumero) */

