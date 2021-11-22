// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){
    total += scores[i];
  }
  for(let j = 0; j < scores.length; j++){
    const cx = width / 2;
    const cy = height / 2;
    const R = width * 0.4;
    let point = 0;
    point += scores[j];
    arc(cx,cy,R,R,TWO_PI*(point-scores[j])/total,TWO_PI*point/total,PIE);
  }
}
