var loadState = {

  preload: function () {
    var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...',
      { font: '30px Arial', fill: '#ffffff' });
    loadingLabel.anchor.setTo(0.5, 0.5);

    var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
    progressBar.anchor.setTo(0.5, 0.5);
    game.load.setPreloadSprite(progressBar);
  },

  create: function() {
    game.state.start('menu');
  }
};