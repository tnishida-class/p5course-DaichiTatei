// 「心臓の鼓動のように大きくなったり小さくなったりする円(クリックで移動可)」
let count;
let x,y,v;

function setup(){
  createCanvas(200, 200);
  count = 100;
  x=width/2
  y=height/2
  v=5;

}

function draw(){
  background(160, 192, 255);
  count+=v;

  if(count>150||count<50){v=-1*v}
  ellipse(x, y, count);

  count = constrain(count, 0, width);
}
function mouseClicked(){
  x=mouseX
  y=mouseY

}
