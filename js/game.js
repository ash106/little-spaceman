var game = new Phaser.Game(996, 560, Phaser.AUTO, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('load', loadState);
// game.state.add('menu', menuState);
game.state.add('play', playState);

game.state.start('boot');