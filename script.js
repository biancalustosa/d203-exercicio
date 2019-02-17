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
   