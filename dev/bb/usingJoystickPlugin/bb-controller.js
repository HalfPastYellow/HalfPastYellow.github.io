var PhaserGame = {};

PhaserGame = function () {

    // this.sprite;

    // this.pad;

    // this.stick;

    // this.buttonA;
    // this.buttonB;
    // this.buttonC;

};

PhaserGame.prototype = {
    init: function () {
    },
    // var game = new Phaser.Game(width, height, Phaser.AUTO, 'bb', { preload: preload, create: create, update: update, render: render });

    preload: function () {
        this.load.atlas('dpad', 'dpad.png', 'dpad.json');
    },
    
    create: function () {
        // this.pad = this.game.plugins.add(Phaser.Plugin.VirtualJoystick);
        this.pad = this.game.plugins.add(Phaser.Plugin.VirtualJoystick);
        
        var test = test;
        // this.game.pad = this.game.plugins.add(Phaser.Plugin.FadePlugin);
        // this.juicy = this.game.plugins.add(new Phaser.Plugin.Juicy(this));

        this.stick = this.pad.addDPad(0, 0, 200, 'dpad');
        // this.stick.alignBottomLeft(0);

        // this.buttonA = this.pad.addButton(500, 520, 'dpad', 'button1-up', 'button1-down');
        // this.buttonA.onDown.add(this.pressButtonA, this);
    },

    update: function () {

        // var maxSpeed = 300;

        // if (this.stick.isDown) {
        //     this.sprite.body.velocity.set(0);

        //     if (this.stick.direction === Phaser.LEFT) {
        //         // this.sprite.body.velocity.x = -maxSpeed;
        //     }
        //     else if (this.stick.direction === Phaser.RIGHT) {
        //         // this.sprite.body.velocity.x = maxSpeed;
        //     }
        //     else if (this.stick.direction === Phaser.UP) {
        //         // this.sprite.body.velocity.y = -maxSpeed;
        //     }
        //     else if (this.stick.direction === Phaser.DOWN) {
        //         // this.sprite.body.velocity.y = maxSpeed;
        //     }
        // }
        // else {
        //     // this.sprite.body.velocity.set(0);
        // }

    },

    render: function () {

    },

    pressButtonA: function () {

        // this.sprite.tint = Math.random() * 0xFFFFFF;
    },
};