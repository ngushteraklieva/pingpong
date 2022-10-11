class Paddle {

	constructor() {
		this.paddleX = 320; // width/2 - paddleWidth/2
		this.paddleY = 480; // y - paddleHeight   // y=500
		this.paddleWidth = 160;
		this.paddleHeight = 20;
        this.paddleR = 5
	}

	draw() {
        fill('#99ABDC')
  		rect(this.paddleX, this.paddleY, this.paddleWidth, this.paddleHeight, this.paddleR);
	}

    move(){
        keyPressed();
    }

	bounce() {
        //console.log("ball x",game.ball.ballX)
		if ((game.ball.ballX > this.paddleX && // that means that my ball is positioned on/above the paddle or in right from it
            game.ball.ballX < this.paddleX  + this.paddleWidth + game.ball.ballR) && // if the ball is in the borders of the paddle in x
            (game.ball.ballY + game.ball.ballR == this.paddleY)) { // if the ball touches the paddle

                game.ball.speedY *= -1;

          }
        //   if (this.paddleWidth+this.paddleX <= game.ball.ballX + game.ball.ballR){
        //     game.ball.speedX *= -1;
        //     game.ball.speedY *= -1
        //   }
	}
}