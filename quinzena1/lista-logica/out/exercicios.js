 // Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = Number(prompt('Digite a altura'))
  const largura = Number(prompt('Digite a largura'))

  console.log(altura*largura)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = Number(prompt('Digite o ano atual'))
  const anoNascimento = Number(prompt('Digite o ano de nascimento'))

  console.log(anoAtual-anoNascimento)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = Number(prompt('Digite seu peso em Kg'))
  const altura = Number(prompt('Digite sua altura em metros'))

  console.log(peso/(altura*altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt('Digite seu nome')
  const idade = Number(prompt('Digite sua idade'))
  const email = prompt('Digite seu e-mail')

console.log("Meu nome é "+nome+", tenho "+idade+" anos, e o meu email é "+email+".")


}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui

let corUm = prompt('Digite sua 1ª cor favorita')
let corDois = prompt('Digite sua 2ª cor favorita')
let corTres = prompt('Digite sua 3ª cor favorita')

let novaArray = [corUm,corDois,corTres]

console.log(novaArray)

}


// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui

  let texto = prompt('Escreva aqui e seu texto aparecerá com letras MAIÚSCULAS')

  console.log(texto.toUpperCase())

}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
let custo = Number(prompt('Insira o custo do espetáculo'))
let entrada = Number(prompt('Insira o valor da entrada'))

console.log(custo/entrada)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  let textoUm = prompt('Insira seu texto aqui')
  let textoDois = prompt('Insira seu novo texto aqui')
  let resultadoUm = textoUm.length
  let resultadoDois = textoDois.length
  

  console.log(resultadoUm==resultadoDois)

}


// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let textoTres = prompt('Insira seu texto aqui')
  let textoQuatro = prompt ('Insira seu novo texto aqui')
  let conversaoUm = textoTres.toUpperCase()
  let conversaoDois = textoQuatro.toUpperCase()

  
  console.log(conversaoUm==conversaoDois)

}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
const qualAnoEstamos = Number(prompt('Digite aqui o ano que estamos'))
const quandoNasceu = Number(prompt('Em que ano você nasceu AAAA'))
const emissaoRg = Number(prompt('Ano de emissão de sua carteira AAAA'))

let idade = (qualAnoEstamos-quandoNasceu)
let renovacaoRg = (qualAnoEstamos-emissaoRg)

console.log((idade<=20 && renovacaoRg>=5) || (idade>20&&idade<=50&&renovacaoRg>=10) || (idade>50&&renovacaoRg>=15))


}
// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui

const anoAtualizado = Number(prompt("Em que an estamos?"))
const resultado = (anoAtualizado % 400 == 0) || (anoAtualizado % 4 == 0 && anoAtualizado % 100 !=0)
console.log(resultado)

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui

  let maior18 = prompt('Você tem mais de 18 anos')
  let escolaridade = prompt('Possui ensino médio completo')
  let disponibilidade = prompt('Tem disponibilidade exclusiva durante o curso')
  let resposta1 = maior18.toUpperCase()
  let resposta2 = escolaridade.toUpperCase()
  let resposta3 = disponibilidade.toUpperCase()


  console.log(resposta1=="SIM"&&resposta2=="SIM"&&resposta3=="SIM")
}