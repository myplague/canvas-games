document.addEventListener('keydown',function(event){
  console.log(event);
  if(event.keyCode === 39){
    player.x += 20;
  }
  if (event.keyCode === 37){
    player.x -= 20;
  }
  if (event.keyCode === 38){
    player.y -= 20;
  }
  if (event.keyCode === 40){
    player.y += 20;
  }
});
