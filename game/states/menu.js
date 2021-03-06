
'use strict';
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    // add the background sprite
    this.background = this.game.add.sprite(0,0,'background');
    
    // add the ground sprite as a tile
    // and start scrolling in the negative x direction
    this.ground = this.game.add.tileSprite(0, 0, 335,66,'ground');
    this.ground.anchor.x = 1;//this.ground.width;
    this.ground.anchor.y = 1;//this.ground.height;
    this.ground.autoScroll(200,0);
    this.ground.angle = 180;
  

    this.ground2 = this.game.add.tileSprite(0, 505-66, 335,66,'ground');
    this.ground2.autoScroll(-200,0);



    /** STEP 1 **/
    // create a group to put the title assets in 
    // so they can be manipulated as a whole
    this.titleGroup = this.game.add.group()
      
    /** STEP 2 **/
    // create the title sprite
    // and add it to the group
    this.title = this.add.sprite(20,0,'title');
    this.titleGroup.add(this.title);
    
    /** STEP 3 **/
    // create the bird sprite 
    // and add it to the title group
    this.bird = this.add.sprite(70,50,'bird');
    this.bird.scale.set(.3, .3);
    this.titleGroup.add(this.bird);
    
    /** STEP 4 **/
    // add an animation to the bird
    // and begin the animation
    this.bird.animations.add('flap');
    this.bird.animations.play('flap', 12, true);
    
    /** STEP 5 **/
    // Set the originating location of the group
    this.titleGroup.x = 30;
    this.titleGroup.y = 100;

    /** STEP 6 **/
    //  create an oscillating animation tween for the group
    this.game.add.tween(this.titleGroup).to({y:115}, 350, Phaser.Easing.Linear.NONE, true, 0, 1000, true);

    // add our start button with a callback
    this.startButton = this.game.add.button(this.game.width/2, 300, 'startButton', this.startClick, this);
    this.startButton.anchor.setTo(0.5,0.5);
  },
  startClick: function() {
    // start button click handler
    // start the 'play' state
    this.game.state.start('play');
  }
};


