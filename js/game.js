var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');

game.state.add('play', playState);
game.state.start('play');