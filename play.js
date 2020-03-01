class play extends Phaser.Scene {
  constructor() {
    super('startGame');
  }

  create() {
    //Add's the background image to the game canvas 
    this.background = this.add.tileSprite(400, 300, config.width, config.height, 'background').setScale(2);
    this.background.alpha = .4;
    //Add's the planets to the game canvas with physics
    this.planet = this.physics.add.image(400, 100, 'planet').setScale(0.9);
    this.planet1 = this.physics.add.image(400, 200, 'planet1').setScale(1.2);
    this.planet2 = this.physics.add.image(400, 300, 'planet2').setScale(0.7);
    this.planet3 = this.physics.add.image(400, 400, 'planet3').setScale(0.5);
    this.planet4 = this.physics.add.image(400, 500, 'planet4').setScale(1.5);
    //Add's the stars to the game canvas with physics
    this.star = this.physics.add.image(400, 50, 'star').setScale(.8);
    this.star1 = this.physics.add.image(400, 150, 'star').setScale(.8);
    this.star2 = this.physics.add.image(400, 250, 'star').setScale(.8);
    this.star3 = this.physics.add.image(400, 350, 'star').setScale(.8);
    this.star4 = this.physics.add.image(400, 450, 'star').setScale(.8);
    this.star5 = this.physics.add.image(400, 550, 'star').setScale(.8);
    //Add's a playable character to the game canvas with physics
    this.man = this.physics.add.sprite(700, 300, 'man', [2]).setScale(1.5);
    //Allows keyboard input to control the character
    this.cursor = this.input.keyboard.createCursorKeys();
    //Makes the playable character clash with the world boundaries so they dont just fly out of picture
    this.man.setCollideWorldBounds(true);
  }

  update() {
    //Moves the planets accross the game canvas
    this.movePlanet(this.planet, 1.6);
    this.movePlanet(this.planet1, 1.4);
    this.movePlanet(this.planet2, 1.3);
    this.movePlanet(this.planet3, 1.7);
    this.movePlanet(this.planet4, 1.5);
    //Moves the stars across the game canvas
    this.moveStar(this.star, 1.5);
    this.moveStar(this.star1, 1.6);
    this.moveStar(this.star2, 1.7);
    this.moveStar(this.star3, 1.4);
    this.moveStar(this.star4, 1.3);
    this.moveStar(this.star5, 1.2);
    //Moves the background image across the game canvas continously as a tileSprite
    this.background.tilePositionX += 0.5;
    //Add's controls to the playable character
    if (this.cursor.left.isDown) {
      this.man.x -= 3;
      this.man.anims.play('left', true);
    } else if (this.cursor.right.isDown) {
      this.man.x += 3;
      this.man.anims.play('right', true);
    } else if (this.cursor.up.isDown) {
      this.man.y -= 3;
      this.man.anims.play('up', true);
    } else if (this.cursor.down.isDown) {
      this.man.y += 3;
      this.man.anims.play('down', true);
    }
  }
  //Function to move the planets
  movePlanet(planet, speed) {
    planet.x += speed;
    if (planet.x > config.width) {
      this.resetPlanetPos(planet);
    }
  }
  //Function to move the stars
  moveStar(star, speed) {
    star.x += speed;
    if (star.x > config.width) {
      this.resetStarPos(star);
    }
  }
  //Function to reset the planets position on the X and give them a radom Y position
  resetPlanetPos(planet) {
    planet.x = 0;
    var randomY = Phaser.Math.Between(0, config.height);
    planet.y = randomY;
  }
  //Function to reset the stars position on the X and give them a radom Y position
  resetStarPos(star) {
    star.x = 0;
    var randomY = Phaser.Math.Between(0, config.height);
    star.y = randomY;
  }
}
