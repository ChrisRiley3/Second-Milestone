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
    this.load.image('background', 'assets/images/background.png');
    this.load.image('desert', 'assets/images/Desert.png');
    this.load.image('forest', 'assets/images/Forest.png');
    this.load.image('lava', 'assets/images/Lava.png');
    this.load.image('ocean', 'assets/images/Ocean.png');
    this.load.image('terran', 'assets/images/Terran.png');
}

function create() {
    this.add.image(400, 300, 'background').setScale(2);
    this.add.image(config.width / 2, config.height / 6, 'desert');
    this.add.image(config.width / 2, config.height / 6 + 100, 'forest');
    this.add.image(config.width / 2, config.height / 2, 'lava');
    this.add.image(config.width / 2, config.height / 2 + 100, 'ocean');
    this.add.image(config.width / 2, config.height - 100, 'terran');
}
function update() {
    
}