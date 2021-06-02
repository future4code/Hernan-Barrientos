// ----------------------- Exercícios de interpretação de código -------------------------------
// 1
// a - 10 e 50 pois seria multiplicado 2*5 e 10*5

// b - também seriam impressos os mesmos valores, pois mesmo que não pedido para imprimir, a função será executada

//----------------------------------

// 2
//  Explique o que essa função faz e qual é sua utilidade
// a - A função converte o texto inserido pelo usuário em minúscula e coloca o includes para
// receber um true ou false e descobrir se o texto tem a palavra cenoura

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura` - TRUE ( tem a palavra cenoura )
//      ii.  `CENOURA é bom pra vista` - TRUE ( a função converte tudo para minúsculo )
//      iii. `Cenouras crescem na terra` - FALSE ( cenouras não está no includes)

// ---------------------------------- Exercícios de escrita de código ------------------------------------------

// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações
// sobre você, como: 
/*
function quemSouEu(){
    console.log("Eu sou Hernán, tenho 31 anos, moro em São Bernardo do Campo e sou Estudante Front End")

    }
quemSouEu()

/*function quemSouEu(){

    const sobreMim = "Eu sou Hernán, tenho 31 anos, moro em São Bernardo do Campo e sou Estudante Front End"
    return sobreMim
}
console.log(quemSouEu()) 

teste de outra forma de fazer o Exercício 

// b - 

function quemSouEu2(nome, idade, endereco, profissao){

const sobreMim = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`
return sobreMim
}

console.log(quemSouEu2("Hernán", 31, "São Bernardo do Campo", "Estudante Front End")) 

// Exercício 2

// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
// faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

function somarDoisNumeros(num1, num2) {
    const soma = num1 + num2
    return soma
}
const respostaA = somarDoisNumeros(1, 3)
console.log(respostaA)
    
//b) Faça uma função que recebe 2 números e retorne um booleano que informa
// se o primeiro número é **maior ou igual** ao segundo.
function retornarBooleano(num1, num2) {
    const booleano = num1 >= num2
    return booleano
}
const respostaB = retornarBooleano(5, 12)
console.log(respostaB)

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.
function retonarSeEPar(num1) {
    const ePar = num1 % 2 == 0
    return ePar
}
const respostaC = retonarSeEPar(150)
console.log(respostaC)

//d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem,
// juntamente com uma versão dela em letras maiúsculas.

function calcularTamanhoDaMensagem(mensagem){
    let converterEmMaiuscula = mensagem.toUpperCase()
    let contagem = mensagem.length
    const mensagemFinal = (`${converterEmMaiuscula}, essa mensagem tem ${contagem} caracteres`)
    return mensagemFinal
}
const respostaD = calcularTamanhoDaMensagem("Ninguem disse que seria fácil, esforça-te e faça acontecer!")
console.log(respostaD)



// Exercício 3

/*Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores
inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações: */
/*
function somarDoisNumeros2(num1, num2) {
    const soma = num1 + num2
    return soma
}

function subtarirDoisNumero(num1, num2) {
    const subtracao = num1 - num2
    return subtracao
}
function multiplicarDoisNumeros(num1, num2) {
    const multiplicacao = num1 * num2
    return multiplicacao
    
}
function divisaoDeDoisNumeros(num1, num2) {
    const divisao = num1 / num2
    return divisao
}

let num1 = Number(prompt("insira um numero"))
let num2 = Number(prompt("insira outro numero"))

console.log(somarDoisNumeros2(num1, num2))
console.log(subtarirDoisNumero(num1, num2))
console.log(multiplicarDoisNumeros(num1, num2))
console.log(divisaoDeDoisNumeros(num1, num2)) */

// ------------------ D E S A F I O --------------------------------

// Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro

/* let receberValor = (num1) => {
    
    return num1;
  }
  console.log(receberValor(5))

  //Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno.
  //Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da
  //soma como entrada para imprimi-lo
 let receberDoisValores = (num1, num2) => {
    const resultado = num1 + num2
   const entradaParaSoma = recebervalor(resultado)
  
 }
 Nao consegui solucionar os desafios :'( */
