var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var colors = [
  "#FF0000",
  "#FFA500",
  "#FFFF00",
  "#808000",
  "#FF00FF"
]

var gravity = 1;
var friction = 0.99;

function Ball(x, y, dx, dy,radius) {
  this.x = x;
  this.y = y;
  this.dy = dy;
  this.dx = dx;
  this.radius = radius;
  this.color = colors[Math.floor(Math.random() * colors.length)];
 
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.fillStyle = this.color;
    c.stroke();
    c.fill();
  }
  
  this.update = function() {
    if(this.y + this.radius > canvas.height) {
      this.dy = -this.dy * friction;
    } else {
      this.dy += gravity;
      }

    this.y += this.dy; 
    this.draw();
  }
  
  }

var ballArray = [];
for(var i = 0; i < 500; i++) {
  var radius = 20;
  var x = Math.floor(Math.random() * innerWidth);
  var y = Math.floor(Math.random() * innerHeight);
  var dx =Math.floor(Math.random() * 2);
  var dy = Math.floor(Math.random() * 2);
  ballArray.push(new Ball(x, y, dx, dy, radius));
}


// var ball = new Ball(canvas.width/2, canvas.height/2, 3, 30);


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  
  ballArray.forEach(ball => ball.update());
}

animate();