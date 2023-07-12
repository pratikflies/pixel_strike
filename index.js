//canvas is responsible for drawing shapes on the screen;
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

//applying gravity while moving in +ve Y-axis only;
const gravity = 0.7;
//setting up the background;
const background = new Sprite({
  position: {
    //we always refer to the top-left point;
    x: 0,
    y: 0,
  },
  imageSrc: './img/background.png',
});

//setting up the shop;
const shop = new Sprite({
  position: {
    x: 600,
    y: 128,
  },
  imageSrc: './img/shop.png',
  scale: 2.75,
  //6 frames in the .png;
  framesMax: 6,
});

let choicePlayer = 'heroKnight';
let choiceEnemy = 'evilWizard';
const player = new Fighter(playerChoice(choicePlayer));
const enemy = new Fighter(enemyChoice(choiceEnemy));

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
};

//starting timer before animation begins;
decreaseTimer();
function animate() {
  //creating an infinite loop, animating objects frame by frame;
  window.requestAnimationFrame(animate);
  //setting black background;
  c.fillStyle = 'black';
  //adding black background;
  c.fillRect(0, 0, canvas.width, canvas.height);

  background.update();
  shop.update();

  //setting opacity to background;
  c.fillStyle = 'rgba(255, 255, 255, 00.15)';
  //adding opacity to background;
  c.fillRect(0, 0, canvas.width, canvas.height);

  player.update();
  enemy.update();

  player.velocity.x = 0;
  enemy.velocity.x = 0;

  //player movement;
  if (keys.a.pressed && player.lastKey === 'a') {
    player.velocity.x = -5;
    player.switchSprite('run');
  } else if (keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5;
    player.switchSprite('run');
  } else {
    player.switchSprite('idle');
  }

  //jumping;
  if (player.velocity.y < 0) {
    player.switchSprite('jump');
  } else if (player.velocity.y > 0) {
    player.switchSprite('fall');
  }

  //Enemy movement;
  if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5;
    enemy.switchSprite('run');
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 5;
    enemy.switchSprite('run');
  } else {
    enemy.switchSprite('idle');
  }

  // jumping;
  if (enemy.velocity.y < 0) {
    enemy.switchSprite('jump');
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprite('fall');
  }

  // detect for collision & enemy hits;
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: enemy,
    }) &&
    player.isAttacking &&
    // hit only at the 4th frame, when the sword is completely out;
    player.framesCurrent === 4
  ) {
    enemy.takeHit(player.attackType);
    player.isAttacking = false;

    gsap.to('#enemyHealth', {
      width: enemy.health + '%',
    });
  }

  // if player attacks but misses (i.e., no collision);
  if (player.isAttacking && player.framesCurrent === 4) {
    player.isAttacking = false;
  }

  //collision & player gets hit;
  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player,
    }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 2
  ) {
    player.takeHit(enemy.attackType);
    enemy.isAttacking = false;

    //gsap is an animation library -> eases decrease of health bar;
    gsap.to('#playerHealth', {
      width: player.health + '%',
    });
  }

  // if player misses;
  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false;
  }

  // end game based on health;
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId });
  }
}
animate();

window.addEventListener('keydown', (event) => {
  //player shouldn't be able to move after death;
  console.log(event.key);
  if (!player.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true;
        player.lastKey = 'd';
        break;
      case 'a':
        keys.a.pressed = true;
        player.lastKey = 'a';
        break;
      case 'w':
        player.velocity.y = -12;
        break;
      case ' ':
        player.attack(1);
        break;
      case 'Control':
        player.attack(2);
        break;
    }
  }

  //even if player dies, enemy should be able to move around and celebrate;
  if (!enemy.dead) {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true;
        enemy.lastKey = 'ArrowRight';
        break;
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true;
        enemy.lastKey = 'ArrowLeft';
        break;
      case 'ArrowUp':
        enemy.velocity.y = -12;
        break;
      case 'ArrowDown':
        enemy.attack(1);
        break;
      case 'Enter':
        enemy.attack(2);
        break;
    }
  }
});

window.addEventListener('keyup', (event) => {
  //player keys;
  switch (event.key) {
    case 'd':
      keys.d.pressed = false;
      break;
    case 'a':
      keys.a.pressed = false;
      break;
  }

  // enemy keys;
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false;
      break;
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false;
      break;
  }
});
