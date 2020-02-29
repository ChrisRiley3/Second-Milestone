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
    this.load.image('baren', 'assets/images/baren.png');
    this.load.image('desert', 'assets/images/desert.png');
    this.load.image('forest', 'assets/images/forest.png');
    this.load.image('lava', 'assers/images/lava.png');
    this.load.image('ocean', 'assets/images/ocean.png');
    this.load.image('terran', 'assets/images/terrran.png');
}

function create() {
    this.add.image(400, 300, 'background').setScale(2);
}

function update() {
    
}