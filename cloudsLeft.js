class CloudLeft {

	constructor(image) {

        this.image = image
		this.x = Math.random() * ((-100) - 50) + (-50);
		this.y = 50;
		this.width = Math.random() * (150 - 120) + 120;;
		this.height = Math.random() * (60 - 50) + 50;;
        
	}
	collision(ballInfo) {
		//console.log('collision', ballInfo)
		// get the middle of the obstacle
		const cloudX = this.x + this.width / 2
		const cloudY = this.y + this.height / 2
		// get the middle of the player
		const ballX = ballInfo.ballX + ballInfo.ballR
		const ballY = ballInfo.ballY + ballInfo.ballR
		// measure the distance
		// dist() is a p5 function
		if (dist(cloudX, cloudY, ballX, ballY) > 50) {
			return false
		} else {
			// increment the score
			return true
		}
	}

	draw() {
        this.x++;
        image(this.image,this.x,this.y,this.width,this.height)
	}

	
	}
