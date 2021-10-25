// 小手調べ
function setup(){
  createCanvas(100,100);
  fill(0);
  for(let i = 0; i < 11; i++){
  ellipse(50,50,i*10);
　noFill();
  if(i<5){
    stroke(255,0,0)
  }
  else{
    stroke(0,0,255)
  }
      // BLANK[1]
  }
}
