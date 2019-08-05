// setup canvas

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let ballCount = document.getElementById('regular');
let jupiterCount = document.getElementById('jupiter');
let count = 0;
let jupCount = 1;


let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  let num = Math.floor(Math.random()*(max-min)) + min;
  return num;
};


//////////////////////////////////////
//////// Creating Shape class ////////
//////////////////////////////////////


class Shape {
  constructor(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = true;
  };
};


//////////////////////////////////////////////
//////// Creating EvilCircle subclass ////////
//////////////////////////////////////////////


class EvilCircle extends Shape {
  constructor(x, y,exists) {
  super(x, y, exists)

  this.color = 'white';
  this.velX = 20;
  this.velY = 20;
  this.size = 10;
  };

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.lineWidth = 3;
  };

  checkBounds() {
    if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    };
  };

  setControls() {
    let _this = this;
    window.onkeydown = function(e) {
      if (e.keyCode === 65) {
        _this.x -= _this.velX;
      } else if (e.keyCode === 68) {
        _this.x += _this.velX;
      } else if (e.keyCode === 87) {
        _this.y -= _this.velY;
      } else if (e.keyCode === 83) {
        _this.y += _this.velY;
      };
    };
  };

  collisionDetect() {
    for (var j = 0; j < balls.length; j++) {
      if (balls[j].exists) {

        let dx = this.x - balls[j].x;
        let dy = this.y - balls[j].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + balls[j].size) {
          balls[j].exists = false;
          count--;
          ballCount.textContent = 'Ball count: ' + count;
        };
      };
    };

    if (testBall.exists) {
      let dx = this.x - testBall.x;
      let dy = this.y - testBall.y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + testBall.size) {
        testBall.exists = false;
        jupCount--;
        jupiterCount.textContent = 'Jupiter Count: ' + jupCount;
      };
    }
  };
};


////////////////////////////////////////
//////// Creating Ball subclass ////////
////////////////////////////////////////


class Ball extends Shape {
  constructor(x, y, velX, velY, exists, color, size) {
  super(x, y, velX, velY, exists);

  this.color = color;
  this.size = size;
  };

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  };

  update() {
    if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    };

    this.x += this.velX;
    this.y += this.velY;
  };

  collisionDetect() {
    for (var j = 0; j < balls.length; j++) {
      if (!(this === balls[j])) {

        let dx = this.x - balls[j].x;
        let dy = this.y - balls[j].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)} )`
        };
      };
    };
  };
};



let testEvil = new EvilCircle(150, 150, true)
let testBall = new Ball(50, 80, .05, .05, true, 'red', 30)

let balls = [];

while (balls.length < 25) {
  let size = random(10,20);
  let ball = new Ball(
  random(0 + size, width - size),
  random(0 + size, height - size),
  random(-7, 7),
  random(-7, 7),
  true,
  `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`,
  size);

  count++;
  balls.push(ball);
};

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  for (var i = 0; i < balls.length; i++) {
    if(balls[i].exists) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  };

    if (testBall.exists) {
      testBall.draw();
      testBall.update();
      //testBall.collisionDetect(); -- Jupiter is only red
    }
  };

  testEvil.draw();
  testEvil.checkBounds();
  testEvil.collisionDetect();

  requestAnimationFrame(loop);
};


testEvil.setControls();
loop()
