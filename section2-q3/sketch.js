function setup() {
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  createCanvas(400, 400);
  background(255);
  stroke(255);
  strokeWeight(3);

  const maxR = min(width, height);

  const cx = width / 2; // 中心は (cx, cy)
  const cy = height / 2;

  fill(0);
  ellipse(cx, cy, maxR);

    for (let i = 0; i < 20; i++) {
     let start = (Math.PI/10) * i;
     let stop = (Math.PI/10) * (i + 1);
   if(i%2==0){
      fill(green);
      arc(cx,cy,maxR*0.8,maxR*0.8,start,stop);
      fill(cream);
      arc(cx,cy,maxR*0.75,maxR*0.75,start,stop);
      fill(green);
      arc(cx,cy,maxR*0.5,maxR*0.5,start,stop);
      fill(cream);
      arc(cx,cy,maxR*0.45,maxR*0.45,start,stop);
        }
     else if(i%2==1){
      fill(red);
      arc(cx,cy,maxR*0.8,maxR*0.8,start,stop);
      fill(black);
      arc(cx,cy,maxR*0.75,maxR*0.75,start,stop);
      fill(red);
      arc(cx,cy,maxR*0.5,maxR*0.5,start,stop);
      fill(black);
      arc(cx,cy,maxR*0.45,maxR*0.45,start,stop);
     }
     fill(255)
     arc(cx,cy,maxR*0.8,maxR*0.8,start-0.01,start+0.01)
    }

  fill(green);
  ellipse(cx,cy,maxR*0.1);

  fill(red);
  ellipse(cx,cy,maxR*0.05);
}
