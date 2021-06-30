const playerOne =  document.querySelectorAll('.player-options img');
const pcPlayer =  document.querySelectorAll('.enemy-options img');

var playerOpt=  ' ';

function resetOpacityPlayer(element){ // reseta opacidade das opções n escolhidas
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = 0.3;
    
  }
}

function playerPc(){ //faz a jogada do computador
  let rand = Math.floor(Math.random()*3);

  for (let i = 0; i < pcPlayer.length; i++) {

    if (i == rand) {
      resetOpacityPlayer(pcPlayer);
      pcPlayer[i].style.opacity = 1;
     
    }
  }

}

for (var i = 0; i < playerOne.length; i++) {

  playerOne[i].addEventListener('click',function(t){
      resetOpacityPlayer(playerOne);

      t.target.style.opacity = 1;  
      playerOpt = t.target.getAttribute('opt') ;
      //alert(playerOpt);

      playerPc();
  });
  
}