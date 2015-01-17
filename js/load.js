var loadState = {

  preload: function () {
    var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...',
      { font: '30px Arial', fill: '#ffffff' });
    loadingLabel.anchor.setTo(0.5, 0.5);

    var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
    progressBar.anchor.setTo(0.5, 0.5);
    game.load.setPreloadSprite(progressBar);

    game.load.image('player', 'assets/p1_stand.png');
    game.load.image('gameTiles', 'assets/tiles_spritesheet_trimmed.png');
    game.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
  },

  create: function() {
    game.state.start('play');
  }
};