// EXERCÍCIO 01
function inverteArray(array) {


  const arrayReverse = []

  for (let i = array.length - 1; i >= 0; i--) {
    arrayReverse.push(array[i])

  }
  return arrayReverse
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const arrayNumbers = []
  for (let newValue of array) {
    if (newValue % 2 === 0) {
      arrayNumbers.push(newValue * newValue)

    }
  }
  return arrayNumbers

}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const arrayNumbers = []
  for (let newValue of array) {
    if (newValue % 2 === 0) {
      arrayNumbers.push(newValue)
    }
  }
  return arrayNumbers
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {



  return Math.max(...array)

}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  //a) true && false && false = false` 
  //b) false ||  false = false 
  //c) true && true = true 
  //d) true || false = true
  //e) false || true = true
  const respostas = [false, false, true, true, true]
  return respostas

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const pairsNumbers = []
  for (let i = 0; i < n; i++) {
    pairsNumbers.push(i * 2)
  }
  return pairsNumbers

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

  if (a !== b && b !== c && c !== a) {
    return 'Escaleno'
  } else if (a === b && b === c && c === a) {
    return 'Equilátero'
  } else if (a === b && a !== c) {
    return 'Isósceles'
  }

}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  const numberMax = Math.max(num1, num2)
  const numberMin = Math.min(num1, num2)
  const comparationNumbers = {
    maiorNumero: numberMax,
    maiorDivisivelPorMenor: (numberMax % numberMin === 0),
    diferenca: (numberMax - numberMin)
  }
  return comparationNumbers
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {


}


// EXERCÍCIO 11
function ordenaArray(array) {

  newArray = array.sort(function (a, b) {
    return a - b
  })
  return newArray

}

// EXERCÍCIO 12
function filmeFavorito() {

  const favoriteMovie = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return favoriteMovie
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const favoriteMovie = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return `Venha assistir ao filme ${favoriteMovie.nome}, de ${favoriteMovie.ano}, dirigido por ${favoriteMovie.diretor} e estrelado por ${favoriteMovie.atores.join(", ")}.`

}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: (lado1 * lado2)
  }
  return retangulo

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

  const novaPessoa = {
    ...pessoa,
    nome: "ANÔNIMO",

  }
  return novaPessoa
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  let newArray = []
  const newArrayDePessoas = arrayDePessoas.filter((maioresDe18) => {
     newArray.push(maioresde18 >= 18)
  })
  return newArray
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
