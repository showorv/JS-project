let randomNumber = parseInt(Math.random() * 100 + 1);


const submit= document.querySelector('.guesSub');
const numInput= document.querySelector('#number');
const previousGuess= document.querySelector('#guesses');
const remainning= document.querySelector('#remain');
const lowHigh= document.querySelector('#lowhigh');
const startOver= document.querySelector('.resultPass');


const p=document.createElement('p');

const prevGuess= [];//jate jgula input dibe user dekhte pare.same number jate barbar input na dey tai
let numGuess= 1; //remainning 1 theke shuru\
let playGame= true; //game er theke game start true thkte hoy

if (playGame) {
    submit.addEventListener('click', function (e) {
      e.preventDefault();
  
      const guess = parseInt(numInput.value);
      console.log(guess);
      validateGuess(guess);
    });
  }

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter valid number')
    }
    else if(guess<1){
        alert('please enter number more than 1')
    }
    else if(guess>100){
        alert('please enter number less than 100')
    }

    else{
        prevGuess.push(guess)

        if(numGuess===10){
            displayGuess(guess)
            displayMssgs(`Game over. The number was ${randomNumber}`
             
            )

            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
        
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMssgs('Your guess is right')
    }

    else if(guess>randomNumber){
        displayMssgs('Your guess is too high')
    }
    else if(guess<randomNumber){
        displayMssgs('Your guess is too low')
    }
}


function displayGuess(guess){
    numInput.value='' //INPUT FIELOD CLEAN KORAR JNNE
    previousGuess.innerHTML += `${guess}, `
    numGuess++;
    remainning.innerHTML= `${11-numGuess}`

}

function displayMssgs(message){
   lowHigh.innerHTML= `<h3>${message}</h3>`
}

function endGame(){
    numInput.value='' 
    numInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML=`<h3 id="again">Play Again</h3>`
    
    startOver.appendChild(p);

    playGame=false;
    newGame();
}

function newGame(){
   const newbutton= document.querySelector('#again');

   newbutton.addEventListener('click', function(e){

    randomNumber=parseInt(Math.random() * 100 + 1);
    // prevGuess= [];
    numGuess=1;

   previousGuess.innerHTML=''
   remainning.innerHTML= `${11-numGuess}`
   numInput.removeAttribute('disabled')
   startOver.removeChild(p)


   playGame=true

   })
}