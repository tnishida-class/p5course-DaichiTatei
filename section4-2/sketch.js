//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;
let count, cycle;


function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  count=0
  cycle=150
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
  count=(count+1)%cycle;
  if(count>100&&120<count){
    const b = {x:width/2, y:height/2, size:random(10,30),
               vx:random(-3,3), vy:random(-3,3)};
    balls.push(b);
  }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  const r = random(10,30)
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: r, vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
