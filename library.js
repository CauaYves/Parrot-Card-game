let deck = [];
let cardNum;
let clicks = 0;
let parFounds = 0;
const main = document.querySelector('main');

function endGame(){
  if(parFounds === cardNum / 2){
    window.alert(`Você ganhou em ${clicks} jogadas!`)
  }
}


function unTurn(){
  firstCard.childNodes[1].classList.remove('frontTurn');
  firstCard.childNodes[3].classList.add('back');

  secondCard.childNodes[1].classList.remove('frontTurn');
  secondCard.childNodes[3].classList.add('back');

  firstCard = undefined;
  secondCard = undefined;
}

let firstCard;
let secondCard;

function verify() {
  let firstId = firstCard.getAttribute('data-id');
  let secondId = secondCard.getAttribute('data-id');
  
  if(firstId === secondId){ //achou um par
    firstCard = undefined;
    secondCard = undefined;
    parFounds++
    setTimeout(endGame, 1000)
  }else if(firstId != secondId){ //não achou um par, elas se viram 
    setTimeout(unTurn, 1000)
  }

}


function turnCard(card){ 

  if(card.childNodes[1].classList.contains('frontTurn')){
    return
  }

  if(firstCard === undefined){

    firstCard = card
    card.childNodes[1].classList.add('frontTurn');
    card.childNodes[3].classList.remove('back');
    clicks++

  }else if(secondCard === undefined) {

    secondCard = card
    card.childNodes[1].classList.add('frontTurn')
    card.childNodes[3].classList.remove('back')
    clicks++
    verify()
  }


}

const parrots = [

    'bobross',
    'explody',
    'fiesta',
    'metal',
    'revertit',
    'triplets',
    'unicorn',

]

function comparador() { 

	return Math.random() - 0.5; 

}

function criarDeck(){
  
  for(let k = 0; k < cardNum / 2; k++){

    deck.push(parrots[k])

  }
}

//criação das cartas com imagens

function createCards(){

  const duplicateParrots = [ ...deck, ...deck ]

  let mixedParrots = duplicateParrots.sort(comparador)

  let i = 0

  while(i < cardNum){

   main.innerHTML+=  `
    <div class="card" onclick="turnCard(this)" data-id="${mixedParrots[i]}" data-test="card">
      <div class="front face">
          <img src="imagens/back.png" alt="back" data-test="face-down-image">
      </div>
      <div class="back face">
          <img src="imagens/${mixedParrots[i]}parrot.gif" alt="card" data-test="face-up-image">
      </div>
    </div>
   `
    i++
  }
}

//validação
function start(){
    cardNum = Number(prompt('com quantas cartas quer jogar?[4 até 14]'));

    if(cardNum > 3 && cardNum <15 && cardNum % 2 == 0){
        alert(`inciando com ${cardNum}`);
        criarDeck()
        createCards()
    }else{
        alert('Quantidade inválida!');
        start()
      }
}
start()