//console.log("Hello World!")
//---------------------------Exercícios de interpretação de código------------------


//   1 - a) O que vai ser impresso no console?
//  serão impressos os elementos que são objetos, o index de cada cada elemento e o array completo

//--------------------------------------------

// 2 - a) O que vai ser impresso no console?
// Será impresso somente o nome de cada elemento que é um objeto

//--------------------------------------------

// 3 - a) O que vai ser impresso no console?
//Será impresso o index 0 e 1, pois eles são diferentes de CHIJO.


//--------------------------- Exercícios de escrita de código ------------------
// const pets = [
//     { nome: "Lupin", raca: "Salsicha" },
//     { nome: "Polly", raca: "Lhasa Apso" },
//     { nome: "Madame", raca: "Poodle" },
//     { nome: "Quentinho", raca: "Salsicha" },
//     { nome: "Fluffy", raca: "Poodle" },
//     { nome: "Caramelo", raca: "Vira-lata" },
// ]
//a)
// const listaDeNomesPets = pets.map((pet) => {
//     return pet.nome
// })
// console.log(listaDeNomesPets)

// -----------------------------------------

//b)   
// const somenteSalsichas = pets.filter((racaSalsicha) => {
//     return racaSalsicha.raca === "Salsicha"
// })
// console.log(somenteSalsichas)

// -------------------------------------------

//c)

// const cupomParaPoodle = pets.filter((racaPoodle) => {
//     return racaPoodle.raca === "Poodle"
// }).map((pet) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`

// })
// console.log(cupomParaPoodle)


// Exercício 2 
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }

// ]
// a)
// const nomeDosProdutos = produtos.map((produto) => {
//     return produto.nome
// })
// console.log(nomeDosProdutos)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
// const nomeEPreco = produtos.map((produto) => {
//     let desconto = produto.preco * 0.95 // 5% de desconto
//     return `Nome: ${produto.nome}, Preço: ${parseFloat(desconto.toFixed(2))}`
// })
// console.log(nomeEPreco)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
// const somenteBebidas = produtos.filter((bebida) => {
//     return bebida.categoria === "Bebidas"
// })
// console.log(somenteBebidas)

// d)
// const temAPalavraYpe = produtos.filter((produto) =>{
//     return produto.nome.includes("Ypê")
// })
// console.log(temAPalavraYpe)

// e)
// const mensagemParaProdutosYpe = produtos.filter((produto) =>{
//    return produto.nome.includes("Ypê")  
//  }).map((selecaoProdutos) => {
//      return `Compre ${selecaoProdutos.nome} por ${selecaoProdutos.preco}`
//  })


//  console.log(mensagemParaProdutosYpe)
