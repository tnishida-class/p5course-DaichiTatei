// テキスト「関数を作る(1) 引数のある関数」
// 練習問題：星を描く関数を改造して正N角形を描画する関数を作ってみよう
function setup(){
  createCanvas(1500, 100);
  background(200);
  fill(0);
  crossmark(10, 10, 90, 90);
  ngmark(150, 50, 80);
  regularPolygon(5,250, 50, 40);
}

function crossmark(x1, y1, x2, y2){
  line(x1, y1, x2, y2);
  line(x2, y1, x1, y2);
}

function ngmark(cx, cy, r){
  push();
  noFill();
  strokeWeight(r * 0.1);
  let d = sqrt(r * r / 8);
  ellipse(cx, cy, r);
  line(cx - d, cy - d, cx + d, cy + d);
  pop();
}

function regularPolygon(n, cx, cy, r){
  //以下をまとめようと1/n ,  let x = 100*(n-5)と置いても上手くいかなかった。
  beginShape();
    for(let j = 0; j < 5 ; j++){
    let theta = TWO_PI * j * 1 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
    }
    endShape(CLOSE);
  beginShape();
    for(let j = 0; j < 6 ; j++){
    let theta = TWO_PI * j * 1 / 6 - HALF_PI;
    let x = 100 + cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
    }
    endShape(CLOSE);
  beginShape();
    for(let j = 0; j < 7 ; j++){
    let theta = TWO_PI * j * 1 / 7 - HALF_PI;
    let x = 200 + cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
    }
    endShape(CLOSE);
  beginShape();
    for(let j = 0; j < 8 ; j++){
    let theta = TWO_PI * j * 1 / 8 - HALF_PI;
    let x = 300 + cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
    }
    endShape(CLOSE);
}
