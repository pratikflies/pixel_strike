let myEnemy;
function enemyChoice(choice) {
  if (choice === 'samuraiMack') {
    myEnemy = {
      //initial position of character;
      position: {
        x: 720,
        y: 0,
      },
      //initial velocity of character;
      velocity: {
        x: 0,
        y: 0,
      },
      //this offset is where the character should be placed initially;
      offset: {
        x: -50,
        y: 0,
      },
      //player character's image;
      imageSrc: '/imgEnemy/samuraiMack/Idle.png',
      framesMax: 8,
      scale: 2.5,
      //this offset is to crop the character itself from the .png;
      offset: {
        x: 215,
        y: 157,
      },
      //setting all the actions;
      sprites: {
        idle: {
          imageSrc: '/imgEnemy/samuraiMack/Idle.png',
          framesMax: 8,
        },
        run: {
          imageSrc: '/imgEnemy/samuraiMack/Run.png',
          framesMax: 8,
        },
        jump: {
          imageSrc: '/imgEnemy/samuraiMack/Jump.png',
          framesMax: 2,
        },
        fall: {
          imageSrc: '/imgEnemy/samuraiMack/Fall.png',
          framesMax: 2,
        },
        attack1: {
          imageSrc: '/imgEnemy/samuraiMack/Attack1.png',
          framesMax: 6,
        },
        attack2: {
          imageSrc: '/imgEnemy/samuraiMack/Attack2.png',
          framesMax: 6,
        },
        takeHit: {
          imageSrc: '/imgEnemy/samuraiMack/Take Hit - white silhouette.png',
          framesMax: 4,
        },
        death: {
          imageSrc: '/imgEnemy/samuraiMack/Death.png',
          framesMax: 6,
        },
      },
      //setting up the attack box;
      attackBox: {
        offset: {
          //w.r.t. character;
          x: -210,
          y: 50,
        },
        width: 170,
        height: 50,
      },
    };
  } else if (choice === 'kenji') {
    myEnemy = {
      position: {
        x: 720,
        y: 0,
      },
      velocity: {
        x: 0,
        y: 0,
      },
      color: 'blue',
      offset: {
        x: -50,
        y: 0,
      },
      //enemy character's image
      imageSrc: '/imgEnemy/kenji/Idle.png',
      framesMax: 4,
      scale: 2.5,
      offset: {
        x: 215,
        y: 167,
      },
      sprites: {
        idle: {
          imageSrc: '/imgEnemy/kenji/Idle.png',
          framesMax: 4,
        },
        run: {
          imageSrc: '/imgEnemy/kenji/Run.png',
          framesMax: 8,
        },
        jump: {
          imageSrc: '/imgEnemy/kenji/Jump.png',
          framesMax: 2,
        },
        fall: {
          imageSrc: '/imgEnemy/kenji/Fall.png',
          framesMax: 2,
        },
        attack1: {
          imageSrc: '/imgEnemy/kenji/Attack1.png',
          framesMax: 4,
        },
        attack2: {
          imageSrc: '/imgEnemy/kenji/Attack2.png',
          framesMax: 4,
        },
        takeHit: {
          imageSrc: '/imgEnemy/kenji/Take hit.png',
          framesMax: 3,
        },
        death: {
          imageSrc: '/imgEnemy/kenji/Death.png',
          framesMax: 7,
        },
      },
      attackBox: {
        offset: {
          x: -220,
          y: 50,
        },
        width: 170,
        height: 60,
      },
    };
  } else if (choice === 'evilWizard') {
    myEnemy = {
      position: {
        x: 720,
        y: 0,
      },
      velocity: {
        x: 0,
        y: 0,
      },
      offset: {
        x: 0,
        y: 0,
      },
      imageSrc: '/imgEnemy/evilWizard/Idle.png',
      framesMax: 8,
      scale: 2.5,
      offset: {
        x: 240,
        y: 265,
      },
      sprites: {
        idle: {
          imageSrc: '/imgEnemy/evilWizard/Idle.png',
          framesMax: 8,
        },
        run: {
          imageSrc: '/imgEnemy/evilWizard/Run.png',
          framesMax: 8,
        },
        jump: {
          imageSrc: '/imgEnemy/evilWizard/Jump.png',
          framesMax: 2,
        },
        fall: {
          imageSrc: '/imgEnemy/evilWizard/Fall.png',
          framesMax: 2,
        },
        attack1: {
          imageSrc: '/imgEnemy/evilWizard/Attack1.png',
          framesMax: 8,
        },
        attack2: {
          imageSrc: '/imgEnemy/evilWizard/Attack2.png',
          framesMax: 8,
        },
        takeHit: {
          imageSrc: '/imgEnemy/evilWizard/Take hit.png',
          framesMax: 3,
        },
        death: {
          imageSrc: '/imgEnemy/evilWizard/Death.png',
          framesMax: 7,
        },
      },
      attackBox: {
        offset: {
          x: -210,
          y: 50,
        },
        width: 170,
        height: 50,
      },
    };
  } else if (choice === 'heroKnight') {
    myEnemy = {
      position: {
        x: 700,
        y: 0,
      },
      velocity: {
        x: 0,
        y: 0,
      },
      offset: {
        x: 0,
        y: 0,
      },
      imageSrc: '/imgEnemy/heroKnight/Idle.png',
      framesMax: 11,
      scale: 2.5,
      offset: {
        x: 185,
        y: 135,
      },
      sprites: {
        idle: {
          imageSrc: '/imgEnemy/heroKnight/Idle.png',
          framesMax: 11,
        },
        run: {
          imageSrc: '/imgEnemy/heroKnight/Run.png',
          framesMax: 8,
        },
        jump: {
          imageSrc: '/imgEnemy/heroKnight/Jump.png',
          framesMax: 3,
        },
        fall: {
          imageSrc: '/imgEnemy/heroKnight/Fall.png',
          framesMax: 3,
        },
        attack1: {
          imageSrc: '/imgEnemy/heroKnight/Attack1.png',
          framesMax: 7,
        },
        attack2: {
          imageSrc: '/imgEnemy/heroKnight/Attack2.png',
          framesMax: 7,
        },
        takeHit: {
          imageSrc: '/imgEnemy/heroKnight/Take Hit.png',
          framesMax: 4,
        },
        death: {
          imageSrc: '/imgEnemy/heroKnight/Death.png',
          framesMax: 11,
        },
      },
      attackBox: {
        offset: {
          x: -210,
          y: 50,
        },
        width: 170,
        height: 50,
      },
    };
  }
  return myEnemy;
}
