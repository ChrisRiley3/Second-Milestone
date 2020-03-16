class play extends Phaser.Scene {
  constructor() {
    super('startGame');
  }

  create() {
    //Adds a Points counter at the top of the game
    this.points = 0;
    this.pointsLabel = this.add.text(20, 10, 'Points: 0', {fontSize: '26px', fill: '#fff'});

    //Adds a High Score to the top right of the game
    this.highScore = 0;
    this.highScoreLabel = this.add.text(550, 10, 'High Score: 0', {fontSize: '26px', fill: '#fff'});

    //Add's the background image to the game canvas
    this.background = this.add.tileSprite(400, 300, config.width, config.height, 'background').setScale(2);

    //Created a darker background to add effect to the game
    this.background.alpha = 0.4;

    //Add's the planets to the game canvas with physics
    this.planet = this.physics.add.image(0, 100, 'planet').setScale(0.9);
    this.planet1 = this.physics.add.image(0, 200, 'planet1').setScale(1.2);
    this.planet2 = this.physics.add.image(0, 300, 'planet2').setScale(0.7);
    this.planet3 = this.physics.add.image(0, 400, 'planet3').setScale(0.5);
    this.planet4 = this.physics.add.image(0, 500, 'planet4').setScale(1.5);
    this.planet5 = this.physics.add.image(0, 150, 'planet').setScale(1.2);
    this.planet6 = this.physics.add.image(0, 250, 'planet1').setScale(1.6);
    this.planet7 = this.physics.add.image(0, 350, 'planet2').setScale(1.5);

    //Puts all the planets in a group to allow collision between the player and the planets
    this.enemy = this.physics.add.group();
    this.enemy.add(this.planet);
    this.enemy.add(this.planet1);
    this.enemy.add(this.planet2);
    this.enemy.add(this.planet3);
    this.enemy.add(this.planet4);
    this.enemy.add(this.planet5);
    this.enemy.add(this.planet6);
    this.enemy.add(this.planet7);

    //Add's the stars to the game canvas with physics
    this.star = this.physics.add.image(0, 50, 'star').setScale(0.8);
    this.star1 = this.physics.add.image(0, 150, 'star').setScale(0.8);
    this.star2 = this.physics.add.image(0, 250, 'star').setScale(0.8);
    this.star3 = this.physics.add.image(0, 350, 'star').setScale(0.8);
    this.star4 = this.physics.add.image(0, 450, 'star').setScale(0.8);
    this.star5 = this.physics.add.image(0, 550, 'star').setScale(0.8);

    //Puts all the stars in a group to allow the player to collect the stars wheen they collide
    this.collect = this.physics.add.group();
    this.collect.add(this.star);
    this.collect.add(this.star1);
    this.collect.add(this.star2);
    this.collect.add(this.star3);
    this.collect.add(this.star4);
    this.collect.add(this.star5);

    //Add's a playable character to the game canvas with physics
    this.man = this.physics.add.sprite(700, 300, 'man', [2]).setScale(1.5);

    //Allows keyboard input to control the character
    this.cursor = this.input.keyboard.createCursorKeys();

    //Makes the playable character clash with the world boundaries so they dont just fly out of picture
    this.man.setCollideWorldBounds(true);

    //Adds overlap to the game objects so when they overlap with eachother something will happen
    this.physics.add.overlap(this.man, this.collect, this.collectStar, null, this);
    this.physics.add.overlap(this.man, this.enemy, this.killPlayer, null, this);
  }

  update() {
    //Moves the planets accross the game canvas
    this.movePlanet(this.planet, 1.6);
    this.movePlanet(this.planet1, 1.4);
    this.movePlanet(this.planet2, 1.3);
    this.movePlanet(this.planet3, 1.7);
    this.movePlanet(this.planet4, 1.5);
    this.movePlanet(this.planet5, 1.4);
    this.movePlanet(this.planet6, 1.8);
    this.movePlanet(this.planet7, 1.6);

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
      this.man.x -= 1.5;
      this.man.anims.play('left', true);
    } else if (this.cursor.right.isDown) {
      this.man.x += 1.5;
      this.man.anims.play('right', true);
    } else if (this.cursor.up.isDown) {
      this.man.y -= 1.5;
      this.man.anims.play('up', true);
    } else if (this.cursor.down.isDown) {
      this.man.y += 1.5;
      this.man.anims.play('down', true);
    }

    //Stores the high score in local storage so users can work to beating it
    this.highScoreLabel.text = 'High Score: ' + localStorage.getItem('PlanetManhighscore'); {
      if (this.points > localStorage.getItem('PlanetManhighscore')) {
        localStorage.setItem('PlanetManhighscore', this.points);
      }
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

  //Allows the player to interact with the stars in the game so they dissappear when they overlap
  //Modified so points will be added with every star collected
  collectStar(man, collect) {
    this.resetStarPos(collect)
    this.points += 5;
    this.pointsLabel.text = 'Points: ' + this.points;
    this.highScore += 5;
    this.highScoreLabel.text = 'High Score: ' + this.highScore;
  }

  //Allows the planets to interact the player so that they kill the player when they overlap
  killPlayer(man, enemy) {
    this.scene.start('loadGame')
  }
}