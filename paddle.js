class Paddle {

	constructor() {
		this.paddleX = 320; // width/2 - paddleWidth/2
		this.paddleY = 480;
		this.paddleWidth = 160;
		this.paddleHeight = 20;
        this.paddleR = 5
	}

	draw() {
        noStroke()
        fill('#99ABDC')
  		rect(this.paddleX, this.paddleY, this.paddleWidth, this.paddleHeight, this.paddleR);
	}

    move(){
        keyPressed();
    }

	bounce() {
        //console.log("ball x",game.ball.ballX)
		if ((game.ball.ballX > this.paddleX &&
            game.ball.ballX < this.paddleX + game.ball.ballR + this.paddleWidth) &&
            (game.ball.ballY + game.ball.ballR >= this.paddleY)) {

                game.ball.speedY *= -1;

          }
        //   if (this.paddleWidth+this.paddleX <= game.ball.ballX + game.ball.ballR){
        //     game.ball.speedX *= -1;
        //     game.ball.speedY *= -1
        //   }
	}
}