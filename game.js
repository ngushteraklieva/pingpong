class Game {

	
	constructor() {
		this.background = new Background()
		this.ball = new Ball()
		this.paddle = new Paddle()
		this.clouds = []
		this.cloudsLeft = []
		this.backgroundImages = []	
		this.scoreBigClouds = 0
		this.scoreSmallClouds = 0
    }
	
	
    draw(){
        clear()
		keyPressed()
		noStroke()
		this.background.draw()
		this.ball.draw()
		this.paddle.draw()
		this.ball.move()
		this.ball.bounce()
		this.paddle.bounce()
		
		
		if (frameCount % 300 === 0) {
			this.clouds.push(new Cloud(this.cloudImage))
		}
		if (frameCount % 500 === 0) {
			this.cloudsLeft.push(new CloudLeft(this.cloudImage))
		}

		this.clouds.forEach(function(cloud){
			cloud.draw()
		})
		this.cloudsLeft.forEach(function(cloud){
			cloud.draw()
		})
		this.clouds = this.clouds.filter(cloud => {
			if (cloud.collision(this.ball)) {
				this.scoreBigClouds+=10
				document.querySelector('.score').innerHTML=this.scoreBigClouds+this.scoreSmallClouds
				console.log(this.score)
				return false
				
			} else {
				return true 
			}
		})
		this.cloudsLeft = this.cloudsLeft.filter(cloud => {
			if (cloud.collision(this.ball)) {
				this.scoreSmallClouds+=5
				document.querySelector('.score').innerHTML=this.scoreSmallClouds+this.scoreBigClouds
				return false
				
			} else {
				return true 
			}
		})

		
		//console.log(this.score)
    };


    preload() {
		this.backgroundImages = [
			{ src: loadImage('colors.png'), x: 0, speed: 0 },
			{ src: loadImage('background.png'), x: 0, speed: 0 },	
		]
		this.cloudImage = loadImage('cloud.png')
		
		// let div = document.querySelector('div')
		// let p = document.createElement('p')
		// p.innerHTML = game.score
		// div.appendChild(p)
		// console.log(div)	
	}
		
	
}
