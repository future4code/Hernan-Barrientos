/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")
let deveIniciarRodada = (confirm("Quer iniciar uma nova rodada?"))
if(deveIniciarRodada){
   const carta1 = comprarCarta(); 
   const carta2 = comprarCarta(); 
   const cartaPc1 = comprarCarta(); 
   const cartaPc2 = comprarCarta(); 
   const somaCartaUsuario = carta1.valor + carta2.valor
   const somaCartaPc = cartaPc1.valor + cartaPc2.valor;

   console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - pontuação ${somaCartaUsuario}`)    
   
   console.log(`Computador - cartas: ${cartaPc1.texto} ${cartaPc2.texto} - pontuação ${somaCartaPc}`)

   
   if((somaCartaUsuario) === (somaCartaPc)){
      console.log("EMPATE")
   } else if(somaCartaUsuario < somaCartaPc){
      console.log("O Computador ganhou")
   }else{
      console.log("O Usuário ganhou")
   }

} else {
console.log("O jogo acabou!")
}



