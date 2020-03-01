class load extends Phaser.Scene {
  constructor() {
    super('loadGame');
  }

  preload() {
    this.load.image('background', 'assets/images/background.png');
    this.load.image('planet', 'assets/images/Desert.png');
    this.load.image('planet1', 'assets/images/Forest.png');
    this.load.image('planet2', 'assets/images/Lava.png');
    this.load.image('planet3', 'assets/images/Ocean.png');
    this.load.image('planet4', 'assets/images/Terran.png');
    this.load.image('star', 'assets/images/star.png');

    this.load.spritesheet('man', 'assets/spritesheets/man.png', {
      frameWidth: 16,
      frameHeight: 24
    });
  }

  create() {
    this.scene.start('startGame');

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('man', { start: 2, end: 0 }),
      frameRate: 10,
      repeat: 0
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('man', { start: 2, end: 4 }),
      frameRate: 10,
      repeat: 0
    });
    this.anims.create({
      key: 'left',
      frames: [ { key: 'man', frame: 2}],
      frameRate: 10,
      repeat: 0
    });
    this.anims.create({
      key: 'left',
      frames: [ { key: 'man', frame: 2}],
      frameRate: 10,
      repeat: 0
    });
  }
}
