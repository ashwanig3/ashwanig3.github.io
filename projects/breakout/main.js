var canvas = document.getElementById("myCanvas");
var c = canvas.getContext('2d');
var brickPadding = 10;
var brickOffsetLeft = 30;
var brickOffsetTop = 30;
var paddleWidth = 75;
var paddleHeight = 10;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var score = 0;
var lives = 3;
var ball = new Ball(canvas.width/2,canvas.height-10,3,3,10);

//Add Event listener 
document.addEventListener("keydown", keyDownHandler,false);
document.addEventListener("keyup", keyUpHandler,false);
document.addEventListener("mousemove", mouseMoveHandler, false);

//Function for Mouse move

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2;
  }

}

//Fuction for keydown

function keyDownHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = true;
  }else if(e.keyCode == 37) {
    leftPressed = true;
  }

}

//Function for keyup

function keyUpHandler(e){
  if(e.keyCode == 39) {
    rightPressed = false;
  } else if(e.keyCode == 37) {
    leftPressed = false;
  }
}

var bricks = [];
for(var i=0; i< 5; i++) {
    bricks[i] = [];
    for(var j=0; j< 3; j++) {
        bricks[i][j] = { x: 0, y: 0, status:1};
    }
}

//Function to draw bricks

function drawBricks() {
  for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 3; j++) {
      if(bricks[i][j].status == 1) {
        var brickX = (i *(75 + brickPadding)+ brickOffsetLeft);
        var brickY = (j *(20 + brickPadding)+ brickOffsetTop);
            bricks[i][j].x = brickX;
            bricks[i][j].y = brickY;
            c.beginPath();
            c.rect(brickX, brickY, 75, 20);
            c.fillStyle = "#0095DD";
            c.fill();
            c.closePath();
      }
    }
  }
}

//Function for collision detection

function collisionDetection() {
  for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 3; j++) {
      var b = bricks[i][j];
      if(b.status == 1) {
        if(ball.x + ball.radius > b.x && ball.x - ball.radius < b.x + 75 && ball.y + ball.radius > b.y && ball.y - ball.radius < b.y + 20) {
          ball.dy = -ball.dy;
          b.status = 0;
          score++;
         if(score == 3 * 5) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
         }

        }
      }
    }
  }
}


//Function to draw paddle

function drawPaddle() {
  c.beginPath();
  c.rect(paddleX, canvas.height-paddleHeight,paddleWidth,paddleHeight);
  c.fillStyle = "#0095DD";
  c.fill();
  c.closePath();
}

//Function to draw and update ball

function Ball(x,y,dx,dy,radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "#0095DD";
    c.fillStyle = "#0095DD";
    c.fill()
    c.stroke();
    c.closePath();
  }
 
    this.update =  function() {
    if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    
    if(this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
     else if(ball.y + ball.dy > canvas.height-ball.radius) {
    if(ball.x > paddleX && ball.x < paddleX + paddleWidth) {
        ball.dy = -ball.dy;
    }
    else {
      lives--;
      if(lives == 0) {
        alert("GAME OVER");
        document.location.reload();
      }
      else {
        ball.x = canvas.width/2;
        ball.y = canvas.height-30;
        ball.dx = 3;
        ball.dy = -3;
        paddleX = (canvas.width-paddleWidth)/2;
      }
    }
}
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

//Function to draw score
 
 function drawScore() {
  c.font = "16px Arial";
  c.fillStyle = "#0095DD";
  c.fillText("Score: "+score, 8, 20);
}
 
//Function to draw lives

 function drawLives() {
  c.font = "16px Arial";
  c.fillStyle = "#0095DD";
  c.fillText("Lives: "+lives,canvas.width-65,20)
 }
 
//Function to animate GAME

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  ball.update();
  drawPaddle();
  collisionDetection();
  drawScore();
  drawLives();

  if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
  
}
animate();
