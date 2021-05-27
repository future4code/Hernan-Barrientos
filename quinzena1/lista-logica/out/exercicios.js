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
//creio que esteja com erro... a lógica aparenta estar correta
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
  
  if(resultadoUm==resultadoDois){
    console.log(true)
  }
  else {
    console.log(false)
  }

}


// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let textoTres = prompt('Insira seu texto aqui')
  let textoQuatro = prompt ('Insira seu novo texto aqui')
  let conversaoUm = textoTres.toUpperCase()
  let conversaoDois = textoQuatro.toUpperCase()
  if(conversaoUm==conversaoDois){
    console.log(true)
  }
  else {
    console.log(false)
  }
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
const qualAnoEstamos = Number(prompt('Digite aqui o ano que estamos'))
const quandoNasceu = Number(prompt('Em que ano você nasceu AAAA'))
const emissaoRg = Number(prompt('Ano de emissão de sua carteira AAAA'))
let calculoIdade = (qualAnoEstamos-quandoNasceu)
let renovacaoRg = (qualAnoEstamos-emissaoRg)

if(calculoIdade <=20 && (renovacaoRg)>=5){
  console.log(true)
}

  if (renovacaoRg <5){
    
    console.log(false)
  }

else if((qualAnoEstamos-quandoNasceu)<=50 && (qualAnoEstamos-emissaoRg)>=10){
  console.log(true)
}
  if((qualAnoEstamos-quandoNasceu)<=50 && (qualAnoEstamos-emissaoRg)>10){
    console.log(false)
  }
else if ((qualAnoEstamos-quandoNasceu)>50 && (qualAnoEstamos-emissaoRg)>=15){
  console.log(true)
}
else{
  console.log(false)
}
}
// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
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

  if(maior18=="nao"){
    console.log(false)
  }

  else if((resposta1==resposta2) && (resposta2==resposta3)){
    console.log(true)
  }
  
  else{
    console.log(false)
  }
}