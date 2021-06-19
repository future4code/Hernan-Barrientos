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
for(let i = 0; i <= array.length - 1; i++){
  for(let j = i + 1; j <= array.length; j++){
    if(array[i] > array [j]){
      let aux = array[i]
      array[i] = array[j]
      array[j] = aux
    }
  }
}
let novoArray = []
novoArray.push(array[array.length-2])
novoArray.push(array[1])

return novoArray
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
  const maisDe18 = arrayDePessoas.filter((temMaisDe18) => {
    return temMaisDe18.idade >= 18
  })
 return maisDe18
 
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menosDe18 = arrayDePessoas.filter((temMenosDe18) => {
    return temMenosDe18.idade < 18
  })
 return menosDe18
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const arrayMultiplicadoPor2 = array.map((novoValor) => {
      return (novoValor*2)
     })
    return arrayMultiplicadoPor2
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const arrayMultiplicadoPor2 = array.map((novoValor) => {
    return (novoValor*2).toString()
   })
  return arrayMultiplicadoPor2
}

// EXERCÍCIO 17C
function verificaParidade(array) {
const novoArray = []
 array.map((num) => {
   if (num % 2 === 0) {
     novoArray.push(`${num} é par`)
   } else {
     novoArray.push(`${num} é ímpar`)
   }
 })

return novoArray
}
//A regra para entrar na montanha russa do terror é:
// ter, no mínimo, 1.5m de altura; ser mais velho do que 14 anos e mais novo do que 60 anos.
// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const podeEntrar = []
 pessoas.map((temAcesso) => {
   if (temAcesso.altura > 1.5 && temAcesso.idade > 14 && temAcesso.idade < 60) {
     podeEntrar.push(temAcesso)
   } 
 })

return podeEntrar
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const naoPodeEntrar = []
  pessoas.map((semAcesso) => {
    if (semAcesso.altura <= 1.5 || semAcesso.idade <= 14 || semAcesso.idade >= 60) {
      naoPodeEntrar.push(semAcesso)
    } 
  })
 
 return naoPodeEntrar
 }


// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  let newArray = consultasNome.sort(function (a, b) {
    if (a.nome > b.nome) {
      return 1;
    }
    if (a.nome < b.nome) {
      return -1;
    }
    
    return 0;
  });
  return newArray
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  let newArray = consultasNome.sort(function (a, b) {
    if (a.data > b.data) {
      return 1;
    }
    if (a.data < b.data) {
      return -1;
    }
    
    return 0;
  });
  return newArray
}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
