const game = new Game()

function preload() {
	game.preload()
}
  
function setup() {
	createCanvas(800, 500)
}

function draw() {
	game.draw()
}

function keyPressed() { 
  if(keyIsDown(LEFT_ARROW)) {
    game.paddle.paddleX -= 7;
  
}			
if(keyIsDown(RIGHT_ARROW)) {
    game.paddle.paddleX += 7;
  
}


  }
