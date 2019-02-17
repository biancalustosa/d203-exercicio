// const aleatório = function(){
//   console.log(aleatorio);
// }
// let aleatorio = Math.floor(Math.random() * 50 + 1);

const aleatorio = function  (min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let i = 0;
let vidas = 3;
let palpite = Number(prompt('Tente adivinhar o número. Você possui 10 tentativas'));


while(vidas>0 && palpite != aleatorio){
    

    if(palpite == aleatorio){
    }

    else{
        alert('Você errou.');
        vidas --;
    }
  
    // if(vidas == 0){
    //     alert('Sentimos, mas suas vidas acabaram. Você perdeu o jogo.');
    // }
    

    if (palpite>aleatorio){
        alert(`Está quase lá, seu número é maior do que número a ser adivinhado.`);
        prompt(`Tente novamente. Você possui ${vidas} vidas.`);
    }
    
    
    else {
        alert(`Está quase lá, seu número é menor do que número a ser adivinhado.`);
        prompt(`Tente novamente. Você possui ${vidas} vidas.`);
    }   
    
}     
   

// if (vidas=0){
//                 alert('Sentimos, mas suas vidas acabaram.Você perdeu o jogo.');
//                 }      



// }   
// if (vidas==0){
//     alert('Suas vidas acabaram. Você perdeu o jogo.')
// }

// let numeroPensado = Math.floor(Math.random() * 50 - 1);
// let vidas = 10;

// const geradorDeNumeroAleatorio = function(){
//     console.log(numeroPensado);
//     let adivinharNumero;
    
//     while(vidas >= 0 && numeroPensado != adivinharNumero){
//         adivinharNumero = prompt('Qual é o número pensado?');                

//         if(numeroPensado == adivinharNumero){
//             alert(`Parabéns! Você acertou, o número pensado é: ${numeroPensado}`);
//         }
//         else{
//             alert(`Você errou!`);
//             vidas--;
//                 if(numeroPensado > adivinharNumero){
//                     alert(`O número pensado é maior. Agora você tem ${vidas} vidas.`)
//                 }
//                 else{
//                     alert(`O número pensado é menor. Agora você tem ${vidas} vidas.`);
//                 }
//         }
//     }
// }

// geradorDeNumeroAleatorio();