// 「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let x,y,v;

function setup(){
  createCanvas(200, 200);
  count = 100;
  x=width/2;
  y=height/2;
  v=3;
}

function draw(){
  background(160, 192, 255);
  count+=v;
  if(count>150||count<50){v=-1*v}
  ellipse(x, y, count);

  count = constrain(count, 0, width);
  if(keyIsDown(RIGHT_ARROW)){x = x+5}
  if(keyIsDown(LEFT_ARROW)){x = x-5}
  if(keyIsDown(UP_ARROW)){y = y-5}
  if(keyIsDown(DOWN_ARROW)){y = y+5}
}


function keyPressed(){
  if(keyCode==SHIFT){
    x=width/2;
    y=height/2;
    v=10;
  }
}
function keyReleased(){
  if(keyCode==SHIFT){
    x=width/2;
    y=height/2;
    v=3;
  }
}
