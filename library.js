let deck = [];
let cardNum;
const main = document.querySelector('main');

function turnCard(card){ 

  card.childNodes[1].classList.toggle('front');
  card.childNodes[1].classList.toggle('frontTurn');

  card.childNodes[3].classList.toggle('back');
  card.childNodes[3].classList.toggle('unTurn');

  console.log(card.childNodes);
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
  console.log(mixedParrots)

  let i = 0

  while(i < cardNum){

   main.innerHTML+=  `
    <div class="card" onclick="turnCard(this)">
      <div class="front face">
          <img src="imagens/back.png" alt="">
      </div>
      <div class="back face">
          <img src="imagens/${mixedParrots[i]}parrot.gif" alt="card">
      </div>
    </div>
   `
    i++
  }
}

//validação
function start(){
    cardNum = Number(prompt('Com quantas cartas quer jogar?'));

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