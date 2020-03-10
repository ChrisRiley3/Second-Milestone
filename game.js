var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [load, play],
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 0},
      debug: false
    }
  }
};

var game = new Phaser.Game(config);
