var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

function preload() {
    //Loads images to the canvas 
    this.load.image('background', 'assets/images/background.png');
    this.load.image('planet', 'assets/images/Desert.png');
    this.load.image('planet1', 'assets/images/Forest.png');
    this.load.image('planet2', 'assets/images/Lava.png');
    this.load.image('planet3', 'assets/images/Ocean.png');
    this.load.image('planet4', 'assets/images/Terran.png');
};

function create() {
    //Add's images to the canvas
    this.background = this.add.tileSprite(400, 300, config.width, config.height, 'background').setScale(2);
    this.planet = this.add.image(config.width / 2, config.height / 6, 'planet').setScale(0.9);
    this.planet1 = this.add.image(config.width / 2, config.height / 6 + 100, 'planet1').setScale(1.2);
    this.planet2 = this.add.image(config.width / 2, config.height / 2, 'planet2').setScale(0.7);
    this.planet3 = this.add.image(config.width / 2, config.height / 2 + 100, 'planet3').setScale(0.5);
    this.planet4 = this.add.image(config.width / 2, config.height - 100, 'planet4').setScale(1.5);
};

function update() {
    //Creates a moving image effect on the background
    this.background.tilePositionX += 0.5;

    this.planet.x += 1;
    this.planet1.x += 1.5;
    this.planet2.x += 0.8;
    this.planet3.x += 1.2;
    this.planet4.x += 1.5;

    if (this.planet.x > config.width) {
        this.planet.x = 0;
        var randomY = Phaser.Math.Between(0, config.height);
        this.planet.y = randomY;
    };
    if (this.planet1.x > config.width) {
        this.planet1.x = 0;
        var randomY = Phaser.Math.Between(0, config.height);
        this.planet1.y = randomY;
    };
    if (this.planet2.x > config.width) {
        this.planet2.x = 0;
        var randomY = Phaser.Math.Between(0, config.height);
        this.planet2.y = randomY;
    };
    if (this.planet3.x > config.width) {
        this.planet3.x = 0;
        var randomY = Phaser.Math.Between(0, config.height);
        this.planet3.y = randomY;
    };
    if (this.planet4.x > config.width) {
        this.planet4.x = 0;
        var randomY = Phaser.Math.Between(0, config.height);
        this.planet4.y = randomY;
    };
};






