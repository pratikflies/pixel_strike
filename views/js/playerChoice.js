//thanks to itch.io

let myPlayer;
function playerChoice(choice) {
  if (choice === 'samuraiMack') {
    myPlayer = {
      //initial position of character;
      position: {
        x: 200,
        y: 0,
      },
      //initial velocity of character;
      velocity: {
        x: 0,
        y: 0,
      },
      //this offset is where the character should be placed initially;
      offset: {
        x: 0,
        y: 0,
      },
      //player character's image;
      imageSrc: '/img/samuraiMack/Idle.png',
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
          imageSrc: '/img/samuraiMack/Idle.png',
          framesMax: 8,
        },
        run: {
          imageSrc: '/img/samuraiMack/Run.png',
          framesMax: 8,
        },
        jump: {
          imageSrc: '/img/samuraiMack/Jump.png',
          framesMax: 2,
        },
        fall: {
          imageSrc: '/img/samuraiMack/Fall.png',
          framesMax: 2,
        },
        attack1: {
          imageSrc: '/img/samuraiMack/Attack1.png',
          framesMax: 6,
        },
        attack2: {
          imageSrc: '/img/samuraiMack/Attack2.png',
          framesMax: 6,
        },
        takeHit: {
          imageSrc: '/img/samuraiMack/Take Hit - white silhouette.png',
          framesMax: 4,
        },
        death: {
          imageSrc: '/img/samuraiMack/Death.png',
          framesMax: 6,
        },
      },
      //setting up the attack box;
      attackBox: {
        offset: {
          //w.r.t. character;
          x: 70,
          y: 50,
        },
        width: 170,
        height: 50,
      },
    };
  } else if (choice === 'evilWizard') {
    myPlayer = {
      position: {
        x: 200,
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
      imageSrc: '/img/evilWizard/Idle.png',
      framesMax: 8,
      scale: 2.5,
      offset: {
        x: 240,
        y: 265,
      },
      sprites: {
        idle: {
          imageSrc: '/img/evilWizard/Idle.png',
          framesMax: 8,
        },
        run: {
          imageSrc: '/img/evilWizard/Run.png',
          framesMax: 8,
        },
        jump: {
          imageSrc: '/img/evilWizard/Jump.png',
          framesMax: 2,
        },
        fall: {
          imageSrc: '/img/evilWizard/Fall.png',
          framesMax: 2,
        },
        attack1: {
          imageSrc: '/img/evilWizard/Attack1.png',
          framesMax: 8,
        },
        attack2: {
          imageSrc: '/img/evilWizard/Attack2.png',
          framesMax: 8,
        },
        takeHit: {
          imageSrc: '/img/evilWizard/Take hit.png',
          framesMax: 3,
        },
        death: {
          imageSrc: '/img/evilWizard/Death.png',
          framesMax: 7,
        },
      },
      attackBox: {
        offset: {
          x: 100,
          y: 50,
        },
        width: 170,
        height: 50,
      },
    };
  } else if (choice === 'heroKnight') {
    myPlayer = {
      position: {
        x: 200,
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
      imageSrc: '/img/heroKnight/Idle.png',
      framesMax: 11,
      scale: 2.5,
      offset: {
        x: 185,
        y: 135,
      },
      sprites: {
        idle: {
          imageSrc: '/img/heroKnight/Idle.png',
          framesMax: 11,
        },
        run: {
          imageSrc: '/img/heroKnight/Run.png',
          framesMax: 8,
        },
        jump: {
          imageSrc: '/img/heroKnight/Jump.png',
          framesMax: 3,
        },
        fall: {
          imageSrc: '/img/heroKnight/Fall.png',
          framesMax: 3,
        },
        attack1: {
          imageSrc: '/img/heroKnight/Attack1.png',
          framesMax: 7,
        },
        attack2: {
          imageSrc: '/img/heroKnight/Attack2.png',
          framesMax: 7,
        },
        takeHit: {
          imageSrc: '/img/heroKnight/Take Hit.png',
          framesMax: 4,
        },
        death: {
          imageSrc: '/img/heroKnight/Death.png',
          framesMax: 11,
        },
      },
      attackBox: {
        offset: {
          x: 100,
          y: 50,
        },
        width: 170,
        height: 50,
      },
    };
  } else if (choice === 'martialHero') {
    myPlayer = {
      position: {
        x: 200,
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
      imageSrc: '/img/martialHero/Idle.png',
      framesMax: 10,
      scale: 2.5,
      offset: {
        x: 115,
        y: 57,
      },
      sprites: {
        idle: {
          imageSrc: '/img/martialHero/Idle.png',
          framesMax: 10,
        },
        run: {
          imageSrc: '/img/martialHero/Run.png',
          framesMax: 8,
        },
        jump: {
          imageSrc: '/img/martialHero/Jump.png',
          framesMax: 3,
        },
        fall: {
          imageSrc: '/img/martialHero/Fall.png',
          framesMax: 3,
        },
        attack1: {
          imageSrc: '/img/martialHero/Attack1.png',
          framesMax: 7,
        },
        attack2: {
          imageSrc: '/img/martialHero/Attack2.png',
          framesMax: 6,
        },
        takeHit: {
          imageSrc: '/img/martialHero/Take Hit.png',
          framesMax: 3,
        },
        death: {
          imageSrc: '/img/martialHero/Death.png',
          framesMax: 11,
        },
      },
      attackBox: {
        offset: {
          x: 100,
          y: 50,
        },
        width: 170,
        height: 50,
      },
    };
  }
  return myPlayer;
}
