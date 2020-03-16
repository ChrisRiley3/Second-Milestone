class load extends Phaser.Scene {
  constructor() {
    super('loadGame');
  }

  preload() {
    //Loads the images in the game file
    this.load.image('background', 'assets/images/background.png');
    this.load.image('planet', 'assets/images/Desert.png');
    this.load.image('planet1', 'assets/images/Forest.png');
    this.load.image('planet2', 'assets/images/Lava.png');
    this.load.image('planet3', 'assets/images/Ocean.png');
    this.load.image('planet4', 'assets/images/Terran.png');
    this.load.image('star', 'assets/images/star.png');

    //Loads the spritesheets in the game canvas
    this.load.spritesheet('man', 'assets/spritesheets/man.png', {
      frameWidth: 16,
      frameHeight: 24
    });
  }

  create() {
    //starts play.js
    this.scene.start('startGame');

    //adds animations to the playable character
    this.anims.create({
      key: 'left',
      frames: [{ key: 'man', frame: 0 }],
      frameRate: 10,
      repeat: 0
    });
    this.anims.create({
      key: 'right',
      frames: [{ key: 'man', frame: 4 }],
      frameRate: 10,
      repeat: 0
    });
    this.anims.create({
      key: 'up',
      frames: [{ key: 'man', frame: 2 }],
      frameRate: 10,
      repeat: 0
    });
    this.anims.create({
      key: 'down',
      frames: [{ key: 'man', frame: 2 }],
      frameRate: 10,
      repeat: 0
    });
  }
}
