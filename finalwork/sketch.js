let x,y;
let balls;
let count, cycle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x=1/2*width;
  y=34/40*height;
  vy=-1/40*height;
  balls= [];
  count= 0;
  cooltime=0
}

function draw() {
  background(220);

  UFO(x,y);
  if(keyIsDown(RIGHT_ARROW)){
    x += 1/50*width;
  }
  if(keyIsDown(LEFT_ARROW)){
    x -= 1/50*width;
  }
  if(keyIsDown(UP_ARROW)){
    y -= 1/50*height;
  }
  if(keyIsDown(DOWN_ARROW)){
    y += 1/50*height;
  }
  if(x < 0 ){x=0}
  if(x > width){x=width}
  if(y < 0){y=0}
  if(y > height){y=height}
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    fill(100);
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
      if(b.x < 0 || b.x > width){ b.vx = -1*b.vx}
    b.x = constrain(b.x, 0, width);

    if(abs(x-b.x)<1/20*width&&abs(y-b.y)<1/20*width){
    fill(0);
    rect(0,0,width,height);
    fill(255,0,0);
    textSize(64);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
    noLoop();
    }

  }

  count+=1
  if(count%80 == 1){
    const b = {x:random(5,height-5), y:0, size:1/20*width,
               vx:random(-3,3), vy:random(1/5,3)}
    balls.push(b);


    }
}

function UFO(){
 fill(255,0,0);
 ellipse(x,y,1/20*width);
 fill(0,0,255)
 ellipse(x,y,1/10*width,1/50*width);

}
function mousePressed() {
  　background(220);
    x = 1/2*width;
    y = 34/40*height;
    grabbed = false;

  loop();
}
