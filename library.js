let deck = [];
let cardNum;
const main = document.querySelector('main');
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
    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');
    const imgFront = document.createElement('img');
    const imgBack = document.createElement('img');
    
    imgBack.setAttribute('src', `imagens/${mixedParrots[i]}parrot.gif`);
    imgFront.setAttribute('src', 'imagens/back.png')

    
    back.appendChild(imgBack);
    back.classList.add('face', 'back');

    front.appendChild(imgFront);
    front.classList.add('face', 'front');

    card.setAttribute('data-id', mixedParrots[i])
    card.classList.add('card');
    card.appendChild(front);
    card.appendChild(back);

    main.appendChild(card);
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
      //realocar o start()
    }
}
  start();
