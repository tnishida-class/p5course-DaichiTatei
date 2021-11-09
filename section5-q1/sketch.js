// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(200, 200);
  background(255);
  balloon("I love keyakizaka46");
}

function balloon(t){
  textSize(16);
  let w = textWidth(t);
  let h = textAscent() * 2 + textDescent();
  let p = 2;
  let w0 = width / 2;
  let h0 = height / 2;
  noStroke();
  fill(94, 185, 84);
  rect(w0 - w/2 - p, h0 - h/2 - p, w + p * 2, h + p*2);
  triangle(w0,h0 + h/2 + p,w0 + 20,h0 + h/2 + p,w0 + 20,h0 + h );
  fill(255);
  text(t, w0 - w/2, h0 + h/6);

}
