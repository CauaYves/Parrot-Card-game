<h1 align="center">Parrot Card Game</h1>
Jogo da memória onde o jogador escolhe um numero de cartas e só ganha no momento em que todas elas sejam reveladas
 essa é a implementação do jogo Parrot Card Game, um jogo da memória temático com aleatoriedade, efeitos e transição, responsividade e papagaios dançantes!  
 
### 👁️ preview  

![image](https://user-images.githubusercontent.com/108950428/222968146-d291e82f-ec2f-468d-a1f4-e827a594cd2f.png)
  
  ## ✅ Requisitos

- Geral
    - [ ]  Não utilize nenhuma biblioteca para implementar este projeto (jQuery, lodash, React, etc), nem outras linguagens que compilem para JS (TypeScript, ELM, etc), somente JavaScript puro.
    - [ ]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub, em um repositório público.
    - [ ]  A cada requisito implementado faça um *commit* com uma mensagem descritiva do que você evoluiu.
- Layout
    - [ ]  Aplicar *layout* para *desktop* e *mobile*, seguindo o Figma.
- Distribuição de cartas
    - [ ]  Ao entrar no jogo, o usuário deverá ser perguntado com quantas cartas quer jogar (utilize `prompt`).
    - [ ]  O usuário só poderá inserir números pares no `prompt`, de 4 a 14. Qualquer número que fuja dessa regra não deve ser aceito. No caso de números inválidos, o `prompt` deverá ficar sendo repetido em loop, até que o usuário coloque um número válido.
    - [ ]  Após inserir um número de cartas válido, o jogo deverá inserir as cartas viradas pra baixo na página de forma que a distribuição seja aleatória.
        
        🔥 Dica: para embaralhar uma array, utilize o código abaixo:
        
        ```jsx
        minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
        
        // Esta função pode ficar separada do código acima, onde você preferir
        function comparador() { 
        	return Math.random() - 0.5; 
        }
        ```
        
- Imagens dos parrots
    - [ ]  É obrigatório que tanto a imagem do papagaio virado pra baixo quanto a imagem virada pra cima (gif) sejam implementadas como tag `<img src="...">` (não deve ser um background).
        - OBS: a carta em si pode ser uma `<div>`, somente a imagem do papagaio que deve ser uma `<img>`.
    - [ ]  Papagaios iguais devem necessariamente usar a mesma imagem como base (não podem ser arquivos diferentes para um mesmo papagaio).
- Clique na carta
    - [ ]  Ao clicar em uma carta, ela deve ser virada.
    - [ ]  Caso seja a primeira carta do par, ela deve permanecer virada até o usuário escolher a segunda carta.
    - [ ]  Caso seja a segunda carta virada, existem duas situações:
        - [ ]  Caso seja igual à primeira carta, o usuário acertou e ambas agora devem ficar viradas pra cima até o final do jogo;
        - [ ]  Caso seja uma carta diferente da primeira carta virada, o usuário errou. Nesse caso, o jogo deve **aguardar 1 segundo** e então virar as duas cartas para baixo novamente.
    - [ ]  **Dica**: se quiser fazer o efeito 3D da carta virando, você pode ver o CSS necessário em: [https://repl.it/@BootcampRespond/FlippedCards#index.html](https://repl.it/@BootcampRespond/FlippedCards#index.html) . Só se atente que nesse exemplo a carta vira ao passar o mouse. No caso do jogo, seria ao clicar.
- Fim do jogo
    - [ ]  Quando o usuário terminar de virar todas as cartas corretamente, **deverá** ser exibido um `alert` com a mensagem `Você ganhou em X jogadas!`, sendo X a quantidade de vezes que o usuário virou uma carta no jogo, ou seja, cada carta virada é uma jogada, não é virar duas cartas que é uma jogada.
