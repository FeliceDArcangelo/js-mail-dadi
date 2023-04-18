const button = document.querySelector('#button')
const player = document.querySelector('#num-player')
const computer = document.querySelector('#num-computer')
const result = document.querySelector('#result')

button.addEventListener('click', function(){
    let numPLayer = Math.floor(Math.random() * 6) + 1;
    player.innerHTML = numPLayer

    const numRandom = Math.floor(Math.random() * 6) + 1;
    computer.innerHTML = numRandom

    let resultText;

    if (numPLayer > numRandom){
        resultText = 'Hai vinto'
    } else if (numPLayer < numRandom){
        resultText = 'Hai perso'
    } else{
        resultText = 'Hai pareggiato'
    }

    result.innerHTML = resultText
})
