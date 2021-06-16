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
if (deveIniciarRodada) {
   let carta1 = comprarCarta();
   let carta2 = comprarCarta();
   let cartaPc1 = comprarCarta();
   let cartaPc2 = comprarCarta();

   while (carta1.texto.includes("A") && carta2.texto.includes("A") || cartaPc1.texto.includes("A") && cartaPc2.texto.includes("A")) {
      carta1 = comprarCarta();
      carta2 = comprarCarta();
      cartaPc1 = comprarCarta();
      cartaPc2 = comprarCarta();

   }

   let somaCartaUsuario = carta1.valor + carta2.valor
   let somaCartaPc = cartaPc1.valor + cartaPc2.valor
   let novasCartas = ""
   let novasCartasPc = ""
   while ((somaCartaUsuario <= 21) && confirm(`Suas cartas são ${carta1.texto} ${carta2.texto} ${novasCartas}. A carta revelada do computador é ${cartaPc1.texto}
   Deseja comprar mais uma carta?`)) {
      let novaCarta = comprarCarta();
      somaCartaUsuario = novaCarta.valor + somaCartaUsuario
      novasCartas = novasCartas + novaCarta.texto
   }


   while (somaCartaPc < somaCartaUsuario && somaCartaUsuario <= 21) {
      let novaCartaPc = comprarCarta();
      somaCartaPc = novaCartaPc.valor + somaCartaPc
      novasCartasPc = novasCartasPc + novaCartaPc.texto
   }

   let vencedor
   if((somaCartaUsuario <= 21 && somaCartaUsuario > somaCartaPc) || somaCartaPc > 21){
      vencedor = "O usuário ganhou!"
   }else if ((somaCartaPc <= 21 && somaCartaPc > somaCartaUsuario) || somaCartaUsuario > 21){
      vencedor = "O Computador ganhou!"
   }
   if (vencedor){
      alert(`Suas cartas são ${carta1.texto} ${carta2.texto} ${novasCartas}. Sua pontuação é  ${somaCartaUsuario}.
      As cartas do computador são ${cartaPc1.texto} ${cartaPc2.texto} ${novasCartasPc} . A pontuação do computador é ${somaCartaPc}.  
      ${vencedor}`)
   } else {
      console.log(`EMPATE`)
   }
   

} else {
   console.log("O jogo acabou!")
}




