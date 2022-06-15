// Draw Sunrise Asgn Start

// Set up canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Global Variables
let cloudimg = document.getElementById("cloud");
let cloud2 = document.getElementById("secondcloud")
let sun = 0
let y = 310;
let r = 20;
let x = 150;
let x2 = 155;
let xs = 0;

// Animation of cloud moving

// Animation Loop
requestAnimationFrame(loop);
function loop(){
  x++;
  x2--;
  xs++; 

  // First Cloud moving Right
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 401, 310);
  ctx.drawImage(cloudimg, x, 120);
  ctx.fillStyle = "white";

  // Second Cloud moving Left 
  ctx.drawImage(cloud2, x2, 125);

// Animation of sunrise
if (y <= 310 && y>= 120) {
  y-=0.5;  
  }
    
  if (r<=30) {
    r+= 0.05;
  }
  if (sun <= 255) {
    sun +=0.5;
  }

  // DRAW
// Green Grass
ctx.fillStyle = "green"; 
ctx.fillRect(0, 310, 400, 200);

  // Motion
var counterclockwise = 1 % 2 ;
 ctx.fillStyle = "rgb(255," + sun + ", 0)";
  ctx.beginPath();
  ctx.arc(200, y, r, xs, Math.PI, counterclockwise);
  ctx.fill();
  
  // LOOP
  requestAnimationFrame(loop)
}


