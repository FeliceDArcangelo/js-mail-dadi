let numPLayer = parseInt(document.querySelector('#number'))
const numRandom = (Math.random(1) * 6).toFixed(0)

const button = document.querySelector('.button')

button.addEventListener('click', function(){
    if (numPLayer < numRandom){
    let result = `Hai perso, il tuo numero: ${numPLayer.valueOf}, quello random: ${numRandom}`
    document.querySelector('.result').innerHTML = result

}else{
    let result = `Hai Vinto, il tuo numero: ${numPLayer}, quello random: ${numRandom}`
    document.querySelector('.result').innerHTML = result
}

})





