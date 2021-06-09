// console.log("hello world")

//------------------------------------------ Exercício de interpretação de código -------------------------------------------------
/*
1

a) Explique o que o código faz. Qual o teste que ele realiza? 
O Código pede para o usuário digitar um para para testar se ele é par ou ímpar ( eu acredito )

b) Para que tipos de números ele imprime no console "Passou no teste"? 
para todos os números que dividos por 2 e que tenham o resto = a 0

c) Para que tipos de números a mensagem é "Não passou no teste"?
para os numeros ímpares, todos aqueles que o resto não seja igual a 0 
-------------------------------------------------------------------------
2 -
a) Para que serve o código acima?
Para informar o preço de cada fruta de uma maneira mais eficiente

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
o preço da fruta maçã é R$ 2.25

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem
 impressa no console se retirássemos o `break` que está logo acima do `default`
 (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

 iria ler a mesma mensagem, porém diria que o valor da fruta pera é de 5 reais. 
 Pois esse seria o ultimo valor que teria lido antes do BREAK
---------------------------------------------------------------------------
3
a) O que a primeira linha está fazendo?
Pedindo para o usuário inserir um número qualquer

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
iria dizer que o número passou no teste, pois o teste lógico é SE o NUMERO DE INPUT for MAIOR que 0 e 10 é maior que 0
se fosse - 10, não iria aparecer nada, pois não há um condição declarada nesse código para tal situação

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Com certeza haverá. Pois a variavel foi criada e declarada dentro do escopo filho e por esse motivo não tem como ser acessada
fora dele, já que nao houve um return da variavel.*/
//-------------------------------------------------

// ---------------------------------------- Exercício de Escrita de Código ---------------------------------------

// 1
// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`,
//  caso contrário, imprima `"Você não pode dirigir."`
/*

let idadeDoUsuario = Number(prompt("Qual sua idade?"))

if (idadeDoUsuario >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Voce não pode digirir")
}
-----------------------------------------------------------------------------------
2
// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino)
// ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

let periodoDeEstudo = prompt("Por Favor digitar M (matutino) ou V (Vespertino) ou N (Noturno)")

if (periodoDeEstudo.toUpperCase() === "M"){
    console.log("Bom dia!")
} else if (periodoDeEstudo.toUpperCase() === "V"){
    console.log("Boa tarde!")
} else{
    console.log("Boa Noite!")
}
---------------------------------------------------------------------------------------
Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

Lembre-se que o switch case é como se fosse um if, mas ele verifica APENAS IGUALDADES ESTRITAS (`===`)
let periodoDeEstudo = prompt("Por Favor digitar M (matutino) ou V (Vespertino) ou N (Noturno)")
switch(periodoDeEstudo.toUpperCase()){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Período Não encontrado")
        break
}

--------------------------------------------------------------------------

let generoDoFilme = prompt("Qual genero do filme que irão assistir?")
let valorDoIngresso = Number(prompt("Qual valor do ingresso?"))

if(generoDoFilme.toUpperCase() === "FANTASIA" && valorDoIngresso <= 15){
    console.log("BOM FILME!")
}else{
    console.log("Escolha outro filme :( ")
}
-------------------------------------------------DESAFIO------------------------------------------------
1 

let generoDoFilme = prompt("Qual genero do filme que irão assistir?")
let valorDoIngresso = Number(prompt("Qual valor do ingresso?"))
let snack = prompt("Qual snack você quer comprar?") 

if(generoDoFilme.toUpperCase() === "FANTASIA" && valorDoIngresso <= 15){
    console.log(`Bom Filme`)
    console.log(`Aproveite o seu ${snack}`)
}else{
    console.log("Escolha outro filme :( ")
}


2 */

let nomeCompleto = prompt("Qual seu nome completo?")
let tipoDeJogo = prompt("Qual tipo de jogo IN (Internacional) ou DO (Doméstico)")//IN indica internacional; e DO indica doméstico;
let etapaJogo = prompt(" SF (semi-final), DT (decisão de terceiro lugar) ou FI (final) ") //SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
let categoria = Number(prompt("Qual opção; 1, 2, 3 ou 4?")) // 1, 2, 3 ou 4;
let qtdIngressos = Number(prompt("Quantos Ingressos você precisa?"))
let valorUnitario
let valorTotal

// O seu sistema deve solicitar estas informações ao usuário, através do prompt . Além disso, ele deve imprimir tudo isso, 
// junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso 
//     multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa.
//     Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo
//     valor do dólar (considerar o dólar = R$4,10)

// ---Dados da compra--- 
// Nome do cliente:  Soter Padua 
// Tipo do jogo:  Nacional 
// Etapa do jogo:  Final 
// Categoria:  1 
// Quantidade de Ingressos:  10 ingressos 
// ---Valores--- 
// Valor do ingresso:  R$ 1980
// Valor total:  R$ 19800

 if (tipoDeJogo === "DO" && etapaJogo === "SF" && categoria === 1){
    valorUnitario = 1320
    valorTotal = valorUnitario*qtdIngressos
} else if (categoria === 2){
    valorUnitario = 880
    valorTotal = valorUnitario*qtdIngressos
}else if (categoria === 3){
    valorUnitario = 550
    valorTotal = valorUnitario*qtdIngressos
}else if (categoria === 4){
    valorUnitario = 220
    valorTotal = valorUnitario*qtdIngressos
}

if (tipoDeJogo === "DO" && etapaJogo === "DT" && categoria === 1){
    valorUnitario = 660
    valorTotal = valorUnitario*qtdIngressos
} else if (categoria === 2){
    valorUnitario = 440
    valorTotal = valorUnitario*qtdIngressos
}else if (categoria === 3){
    valorUnitario = 330
    valorTotal = valorUnitario*qtdIngressos
}else if (categoria === 4){
    valorUnitario = 170
    valorTotal = valorUnitario*qtdIngressos
}

if (tipoDeJogo === "DO" && etapaJogo === "FI" && categoria === 1){
    valorUnitario = 1980
    valorTotal = valorUnitario*qtdIngressos
} else if (categoria === 2){
    valorUnitario = 1320
    valorTotal = valorUnitario*qtdIngressos
}else if (categoria === 3){
    valorUnitario = 880
    valorTotal = valorUnitario*qtdIngressos
}else if (categoria === 4){
    valorUnitario = 330
    valorTotal = valorUnitario*qtdIngressos
}




console.log(`Nome do cliente: ${nomeCompleto}
Tipo do Jogo ${tipoDeJogo}
Etapa do jogo: ${etapaJogo}
Categoria: ${categoria}
Quantidade de ingressos: ${qtdIngressos}
-------- Valores -------
Valor do ingresso: R$ ${valorUnitario}
Valor Total: R$ ${valorTotal}`)


