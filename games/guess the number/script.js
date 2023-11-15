let range = prompt("enter the range of random number: ");

let randomNum = Math.floor(Math.random()*range)+1;

console.log(randomNum)

let guess;

while(guess!=randomNum){

    guess = prompt("guess and enter the number:");

    if(guess>randomNum){
        console.log('you guessed big');
        continue;
    }

    if(guess=="quit"){
        alert('quiting');
        break;
    }

    if(guess<randomNum){
        console.log('you guessed small');
    }

}; 

if(parseInt(guess)==randomNum){
    alert("congrats you won the game!");
}
