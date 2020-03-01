class play extends Phaser.Scene {
  constructor() {
    super('startGame');
  }

  create() {
    this.background = this.add.tileSprite(400, 300, config.width, config.height, 'background').setScale(2);

    this.planet = this.add.image(400, 100, 'planet').setScale(0.9);
    this.planet1 = this.add.image(400, 200, 'planet1').setScale(1.2);
    this.planet2 = this.add.image(400, 300, 'planet2').setScale(0.7);
    this.planet3 = this.add.image(400, 400, 'planet3').setScale(0.5);
    this.planet4 = this.add.image(400, 500, 'planet4').setScale(1.5);

    this.man = this.add.sprite(700, 400, 'man', [2]).setScale(1.5);

    this.star = this.physics.add.image(400, 50, 'star')
    this.star1 = this.physics.add.image(400, 150, 'star')
    this.star2 = this.physics.add.image(400, 250, 'star')
    this.star3 = this.physics.add.image(400, 350, 'star')
    this.star4 = this.physics.add.image(400, 450, 'star')
    this.star5 = this.physics.add.image(400, 550, 'star')

  }

  update() {
    this.movePlanet(this.planet, 1.6);
    this.movePlanet(this.planet1, 1.4);
    this.movePlanet(this.planet2, 1.3);
    this.movePlanet(this.planet3, 1.7);
    this.movePlanet(this.planet4, 1.5);

    this.moveStar(this.star, 1.5);
    this.moveStar(this.star1, 1.6);
    this.moveStar(this.star2, 1.7);
    this.moveStar(this.star3, 1.4);
    this.moveStar(this.star4, 1.3);
    this.moveStar(this.star5, 1.2);

    this.background.tilePositionX += 0.5;

  }

  movePlanet(planet, speed) {
    planet.x += speed;
    if (planet.x > config.width) {
      this.resetPlanetPos(planet);
    }
  }

  moveStar(star, speed) {
    star.x += speed;
    if (star.x > config.width) {
      this.resetStarPos(star);
    }
  }

  resetPlanetPos(planet) {
    planet.x = 0;
    var randomY = Phaser.Math.Between(0, config.height);
    planet.y = randomY;
  }

  resetStarPos(star) {
    star.x = 0;
    var randomY = Phaser.Math.Between(0, config.height);
    star.y = randomY;
  }
}
