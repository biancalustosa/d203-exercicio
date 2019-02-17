
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numero = aleatorio (0,50);
let vidas = 9;

while (vidas > 0){

    let palpite = Number(prompt('Tente adivinhar o número aleatório que esta entre 0 e 50. Você tem 10 tentativas.'));

    if(palpite == numero){
        alert('Parabéns, você venceu o jogo.')
    }

    else{
        alert('Que pena, você errou.')
        if(palpite > numero){
            alert(`Você perdeu uma vida, agora possui ${vidas} chances. Está quase lá, seu número é maior do que o número aleatório.`); 
            // alert(`Está quase lá, seu número é maior do que o número aleatório.`);
        
        }

        else{
            alert(`Você perdeu uma vida, agora possui ${vidas} chances. Está quase lá, seu número é menor do que o número aleatorio.`) 
            // alert(`Está quase lá, seu número é menor do que o número aleatorio.`);
            
        }

        vidas --;
    }

    // if(vidas=0){
    //     alert('Sentimos,mas suas vidas acabaram.');
    // }

}


