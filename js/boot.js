var bootState = {

  preload: function () {
    game.load.image('progressBar', 'assets/progressBar.png');
  },

  create: function () {
    game.stage.backgroundColor = '#d0f4f7';
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.state.start('load');
  }
};