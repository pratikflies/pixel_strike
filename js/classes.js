const attack1 = document.getElementById('attack1Music');
const attack2 = document.getElementById('attack2Music');
const death = document.getElementById('deathMusic');
const bgm = document.getElementById('backgroundMusic');
const takeHit = document.getElementById('takeHitMusic');

//moving images and games are basically called Sprite;
class Sprite {
  constructor({
    position,
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
  }) {
    this.position = position;
    this.width = 50;
    this.height = 150;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
    this.framesMax = framesMax;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 5;
    this.offset = offset;
  }

  draw() {
    c.drawImage(
      this.image,
      //which frame;
      this.framesCurrent * (this.image.width / this.framesMax),
      //from where;
      0,
      //how much;
      //x;
      this.image.width / this.framesMax,
      //y;
      this.image.height,

      //offsetting the png;
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      //scaling the image;
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    );
  }

  //refactored code that renders players, enemy and shop frame by frame;
  animateFrames() {
    this.framesElapsed++;

    //change image frame after every 5 elapsed frames;
    if (this.framesElapsed % this.framesHold === 0) {
      //stops background image flickering (0<1 previously so it keeps moving out of frame);
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++;
      } else {
        this.framesCurrent = 0;
      }
    }
  }

  update() {
    this.draw();
    this.animateFrames();
  }
}

class Fighter extends Sprite {
  constructor({
    position,
    velocity,
    color = 'red',
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    //contains all the frames for the player, enemy;
    sprites,
    attackBox = { offset: {}, width: undefined, height: undefined },
  }) {
    super({
      position,
      imageSrc,
      scale,
      framesMax,
      offset,
    });

    this.velocity = velocity;
    //character's width & height;
    this.width = 50;
    this.height = 150;
    //for more robust & accurate movement;
    this.lastKey;
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height,
    };
    this.color = color;
    this.isAttacking;
    this.attackType = 0;
    this.health = 100;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 5;
    this.sprites = sprites;
    this.dead = false;

    //adding the image to each state of the sprite;
    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
  }

  update() {
    //parent class methods used within child class;
    this.draw();
    if (!this.dead) this.animateFrames(); //else it keeps on re-creating death scene;

    //setting attack boxes position;
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y;

    //drawing the attack box;
    /*c.fillRect(
      this.attackBox.position.x,
      this.attackBox.position.y,
      this.attackBox.width,
      this.attackBox.height
    );*/

    ////defining characters' movement along x and y-axis keeping boundaries intact;
    if (
      this.position.x + this.velocity.x >= 0 &&
      this.position.x + this.velocity.x <= canvas.width - 60
    )
      this.position.x += this.velocity.x;
    if (this.position.y + this.velocity.y >= 0)
      this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y >= canvas.height - 96) {
      //96 -> offset from bottom to the platform;
      this.velocity.y = 0;
      //taking the gap into account created due to velocity;
      this.position.y = 330; //330 -> offset from top to the platform;
      //adds downward acceleration;
    } else this.velocity.y += gravity;
  }

  attack(type) {
    //but as soon as you do this, you'll go back to idle as you're not doing anything;
    if (type == 1) {
      this.switchSprite('attack1');
      //hence a guard clause in switchSprite;
      this.isAttacking = true;
      //setting the type of attack;
      this.attackType = type;
    } else {
      //heavy attach so we set a delay of 700ms;
      setTimeout(
        function () {
          this.switchSprite('attack2');
          this.isAttacking = true;
          this.attackType = type;
        }.bind(this),
        700
      );
    }
  }

  takeHit(type) {
    if (type == 1) {
      attack1.currentTime = attack2.currentTime = 0;
      attack2.pause();
      attack1.play();
      this.health -= 10;
    } else {
      attack1.currentTime = attack2.currentTime = 0;
      attack1.pause();
      attack2.play();
      c.fillStyle = 'rgba(255, 0, 0, 00.20)';
      c.fillRect(0, 0, canvas.width, canvas.height);
      this.health -= 20;
    }
    if (this.health >= 0) {
      takeHit.currentTime = 0;
      takeHit.play();
    }
    if (this.health <= 0) {
      attack1.currentTime = attack2.currentTime = death.currentTime = 0;
      bgm.pause();
      death.play();
      this.switchSprite('death');
    } else this.switchSprite('takeHit');
  }

  switchSprite(sprite) {
    //death overrding all other animations (priority-3);
    if (this.image === this.sprites.death.image) {
      if (this.framesCurrent === this.sprites.death.framesMax - 1)
        this.dead = true;
      return;
    }

    //overriding all other animations with the attack animation (priority-2);
    if (
      this.image === this.sprites.attack1.image &&
      //restricts to one attack only;
      this.framesCurrent < this.sprites.attack1.framesMax - 1
    )
      return;

    if (
      this.image === this.sprites.attack2.image &&
      //restricts to one attack only;
      this.framesCurrent < this.sprites.attack2.framesMax - 1
    )
      return;

    // override when fighter gets hit (priority-2)
    if (
      this.image === this.sprites.takeHit.image &&
      this.framesCurrent < this.sprites.takeHit.framesMax - 1
    )
      return;

    switch (sprite) {
      case 'idle':
        //if character already idle, it wouldn't start over again from the 0th frame;
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image;
          this.framesMax = this.sprites.idle.framesMax;
          this.framesCurrent = 0;
        }
        break;

      case 'run':
        if (this.image !== this.sprites.run.image) {
          this.image = this.sprites.run.image;
          this.framesMax = this.sprites.run.framesMax;
          this.framesCurrent = 0;
        }
        break;

      case 'jump':
        if (this.image !== this.sprites.jump.image) {
          this.image = this.sprites.jump.image;
          this.framesMax = this.sprites.jump.framesMax;
          this.framesCurrent = 0;
        }
        break;

      case 'fall':
        if (this.image !== this.sprites.fall.image) {
          this.image = this.sprites.fall.image;
          this.framesMax = this.sprites.fall.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case 'attack1':
        if (this.image !== this.sprites.attack1.image) {
          this.image = this.sprites.attack1.image;
          this.framesMax = this.sprites.attack1.framesMax;
          this.framesCurrent = 0;
        }
        break;

      case 'attack2':
        if (this.image !== this.sprites.attack2.image) {
          this.image = this.sprites.attack2.image;
          this.framesMax = this.sprites.attack2.framesMax;
          this.framesCurrent = 0;
        }
        break;

      case 'takeHit':
        if (this.image !== this.sprites.takeHit.image) {
          this.image = this.sprites.takeHit.image;
          this.framesMax = this.sprites.takeHit.framesMax;
          this.framesCurrent = 0;
        }
        break;

      case 'death':
        if (this.image !== this.sprites.death.image) {
          this.image = this.sprites.death.image;
          this.framesMax = this.sprites.death.framesMax;
          this.framesCurrent = 0;
        }
        break;
    }
  }
}
