var playState = {
  preload: function() {
    game.load.image('player', 'assets/p1_stand.png');
    game.load.image('wallH', 'assets/wallHorizontal.png');
  },

  create: function() {
    game.stage.backgroundColor = '#d0f4f7';
    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
    this.player.scale.setTo(0.5, 0.5);
    this.player.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(this.player);

    this.player.body.gravity.y = 500;

    this.cursor = game.input.keyboard.createCursorKeys();

    this.floor = game.add.group();
    this.floor.enableBody = true;
    game.add.sprite(0, 320, 'wallH', 0, this.floor);
    game.add.sprite(300, 320, 'wallH', 0, this.floor);
    this.floor.setAll('body.immovable', true);
  },

  update: function () {
    game.physics.arcade.collide(this.player, this.floor);
    
    this.movePlayer();
  },

  movePlayer: function() {
    if (this.cursor.left.isDown) {
      this.player.body.velocity.x = -200;
    }
    else if (this.cursor.right.isDown) {
      this.player.body.velocity.x = 200;
    }
    else {
      this.player.body.velocity.x = 0;
    }

    if (this.cursor.up.isDown && this.player.body.touching.down) {
      this.player.body.velocity.y = -320;
    }
  }

};