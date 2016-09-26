var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var bg = document.getElementById('cementerio');
// ctx.strokeRect(100,100,50,10);
// ctx.fillRect(100,100,20,20);
//
// ctx.strokeStyle ='yellow';
// ctx.strokeRect(20,20,30,30);
//
// ctx.fillStyle = 'blue'
// ctx.fillRect = (50,50,50,30);

var player = {
  x: 50,
  y: 50,
  width: 80,
  height: 80,
  imagen: document.getElementById('presidente'),
  update: function(){

  },
  render:function(){

    ctx.drawImage(player.imagen,player.x, player.y, player.width, player.height)
  }
};



function gameLoop(){
//update, render all entities
ctx.drawImage(bg,0,0,canvas.width, canvas.height);
// ctx.fillStyle ='white'
// ctx.fillRect(0,0,canvas.width,canvas.height);
player.update();
player.render();
  window.requestAnimationFrame(gameLoop);
};

gameLoop()
