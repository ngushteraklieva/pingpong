class Ball {

	constructor() {
		this.ballX = 400;
		this.ballY = 465;
		this.ballR = 15
		this.speedX = 4;
		this.speedY = -4;
	}

	draw() {
        fill('#FCF8FF')
        ellipse(this.ballX, this.ballY, this.ballR*2, this.ballR*2);
        
	}

    move(){
        this.ballX += this.speedX; 
        this.ballY += this.speedY;
        //console.log(this.ballY) 
        
    }

	bounce() {
		if (this.ballX > 800 - this.ballR || this.ballX < this.ballR) {   
			    
            this.speedX = -this.speedX;

          }
    else if (this.ballY < this.ballR) {

    this.speedY = -this.speedY;
    } else if(this.ballY-this.ballR>500){
        alert(`You have lost your ball! Congratulations, you have cleared the sky of ${(game.scoreBigClouds/10)+(game.scoreSmallClouds/5)} rainy clouds!`)
        //score:
        game.reset()
        //game.startAgain()
        //save your result
        //start a new game
       
    }
	}
}