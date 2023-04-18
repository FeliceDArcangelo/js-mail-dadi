const emailArr = [
    'felicedarcangelo25@gmail.com',
    'giorgia@hotmail.com',
    'robertomarco@gmail.com',
    'acaso@hotmail.com',
]

const email = prompt('La tua email')

let trovata = false; 
for (let i = 0; i < emailArr.length; i++){
    if (email == emailArr[i]){
        trovata = true;
    }
}

if (trovata){
    console.log('email trovata')
} else{
    console.log ('email non trovata')
}
