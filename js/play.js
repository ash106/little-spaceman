var playState = {

  preload: function() {
    game.time.advancedTiming = true;
  },

  create: function() {
    game.stage.backgroundColor = '#d0f4f7';
    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
    // this.player.scale.setTo(0.5, 0.5);
    this.player.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(this.player);

    this.player.body.gravity.y = 500;

    game.camera.follow(this.player);

    this.cursor = game.input.keyboard.createCursorKeys();

    this.createWorld();
    // this.floor = game.add.group();
    // this.floor.enableBody = true;
    // game.add.sprite(0, 320, 'wallH', 0, this.floor);
    // game.add.sprite(300, 320, 'wallH', 0, this.floor);
    // this.floor.setAll('body.immovable', true);
  },

  update: function () {
    game.physics.arcade.collide(this.player, this.layer);
    
    this.movePlayer();
  },

  render: function() {
    game.debug.text(game.time.fps || '--', 20, 70, "#000000", "40px Courier");
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

    if (this.cursor.up.isDown && this.player.body.onFloor()) {
      this.player.body.velocity.y = -320;
    }
  },

  createWorld: function() {
    this.map = game.add.tilemap('map');
    this.map.addTilesetImage('tileset', 'gameTiles');
    this.layer = this.map.createLayer('blockedLayer');
    this.layer.resizeWorld();
    this.map.setCollisionBetween(1, 100000, true, 'blockedLayer');
  }

};