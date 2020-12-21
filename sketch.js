var ground;



function setup() {
  createCanvas(480,800);
  ground=new Ground(width/2,100,50,10)
}

function draw() {
  background(255,255,255);
  ground.display()
  drawSprites();
}