'use strict';

// Selecting elements
const playerE0 = document.querySelector('.player--0');
const playerE1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const currentE0 = document.getElementById('current--0');
const score1El = document.getElementById('score--1');
const currentE1 = document.getElementById("current--1");
const diceEl =  document.querySelector('.dice');
const btnnew =  document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');


// starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentscore = 0;
let activeplayer = 0;
let score = [0,0];
let playing = true;

 const playerswitch = function(){
 
    document.getElementById(`current--${activeplayer}`).textContent = 0;
      currentscore = 0; 
  activeplayer =  activeplayer ===0 ? 1: 0; 
  playerE0.classList.toggle('player--active')
  playerE1.classList.toggle('player--active')}


// Rolling dice  functionality
 
btnroll.addEventListener('click',()=>{
    if(playing){
    //generating dice random number
    const dice = Math.trunc(Math.random()*6)+1;

    // display dice number
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;

// check dice number if 1
if(dice !==1){

    currentscore += dice;
    document.getElementById(`current--${activeplayer}`).textContent = currentscore;
    
}

else{
    playerswitch();
}
    }
})

// hold value and check win condition
btnhold.addEventListener('click',()=>{
    if(playing){


score[activeplayer] += currentscore;
console.log(score)
document.getElementById(`score--${activeplayer}`).textContent =score[activeplayer];

if(score[activeplayer] >= 20){

    playing = false;
    diceEl.classList.add('hidden');
 document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
 document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
}

else{

    playerswitch();

}

    }
})