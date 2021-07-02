const playerOne =  document.querySelectorAll('.player-options img');
const playerPc =  document.querySelectorAll('.enemy-options img');

const spanPlayerOnePoint = document.querySelector('.player-options span');
const spanPlayerPcPoint = document.querySelector('.enemy-options span');
 
var playerOptOne= '';
var playerPcOpt = '';

var playerOnePoints = 0;
var playerPcPoints = 0;

function resetPlayerPoints(){ //resetar pontuação
  playerOnePoints = 0;
  playerPcPoints = 0;

  spanPlayerOnePoint.innerHTML = playerOnePoints;
  spanPlayerPcPoint.innerHTML = playerPcPoints;
  removeStyleRoundWinner();

  for (let i = 0; i < playerOne.length; i++) {
    playerOne[i].style.opacity = 0.3;
    playerPc[i].style.opacity = 0.3;
    
  }
  return;
}

function resetOpacityPlayer(element){ // resetar opacidade das opções n escolhidas
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = 0.3;
    
  }
}

function addNamePlayerOne(){ //adicionando nome do player 1
  let namePlayer = prompt('Digite seu nome.');
  let namePlayerOne =  document.querySelector('.player-options p');
  namePlayerOne.innerHTML = namePlayer;
}

function removeStyleRoundWinner(){
  spanPlayerOnePoint.classList.remove('round-winner');//remove classe do perdedor da rodada
  spanPlayerPcPoint.classList.remove('round-winner');//remove classe do perdedor da rodada
}

function addScore(scorePlayer){//add pontos
  if (scorePlayer == 1) {
    playerOnePoints +=1;//somando pontos
    spanPlayerOnePoint.innerHTML = playerOnePoints; //add pontos

    spanPlayerOnePoint.classList.add('round-winner');//add classe do ganhador da rodada
    spanPlayerPcPoint.classList.remove('round-winner');//remove classe do perdedor da rodada


    return;
  }else if (scorePlayer == 0) {
    playerPcPoints +=1;//somando pontos
    spanPlayerPcPoint.innerHTML = playerPcPoints;//add pontos

    spanPlayerPcPoint.classList.add('round-winner');//add classe do ganhador da rodada
    spanPlayerOnePoint.classList.remove('round-winner');//remove classe do perdedor da rodada
  }

}


function verifyWinner(){ // verifica quem canhou.
  if (playerOptOne == playerPcOpt) {
   removeStyleRoundWinner();
    //alert('empate')
  }

  if (playerOptOne == 'rock' && playerPcOpt == 'scissor') {
    addScore(1);
  }else if (playerOptOne == 'paper' && playerPcOpt == 'rock') {
    addScore(1);
  }else if (playerOptOne == 'scissor' && playerPcOpt == 'paper') {
    addScore(1);
  }

  if (playerOptOne == 'scissor' && playerPcOpt == 'rock') {
    addScore(0);
  }else if (playerOptOne == 'rock' && playerPcOpt == 'paper') {
    addScore(0);
  }else if (playerOptOne == 'paper' && playerPcOpt == 'scissor') {
    addScore(0);
}
  
}

function playerPcFunc(){ //faz a jogada do computador
  let rand = Math.floor(Math.random()*3);

  for (let i = 0; i < playerPc.length; i++) {

    if (i == rand) {
      resetOpacityPlayer(playerPc);
      playerPc[i].style.opacity = 1;
      playerPcOpt = playerPc[i].getAttribute('opt');
      verifyWinner();
      //alert(playerPcOpt);
    }
  }

}

for (var i = 0; i < playerOne.length; i++) { //pega o clique do jogador

  playerOne[i].addEventListener('click',function(t){
      resetOpacityPlayer(playerOne);

      t.target.style.opacity = 1;  
      playerOptOne = t.target.getAttribute('opt') ;
      //alert(playerOpt);

      playerPcFunc();
  });
  
}

