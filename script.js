var elements =  document.querySelectorAll('.player-options img');

function resetOpacityPlayer(){
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.opacity = 0.3;
    
  }
}

for (var i = 0; i < elements.length; i++) {
 

  elements[i].addEventListener('click',(t)=>{
      resetOpacityPlayer();
      t.target.style.opacity = 1;    
  });
  
}