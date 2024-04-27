import * as readline from 'readline';

// コマンドラインから数値の入力を受け取るための設定
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (input) => {
  const N: number = parseInt(input);
  const Answer: number[] = [];

  // 素因数分解を行う
  const LIMIT: number = Math.floor(Math.sqrt(N));
  let current: number = N;

  for (let i = 2; i <= LIMIT; i++) {
    while (current % i === 0) {
      current /= i;
      Answer.push(i);
    }
  }

  if (current >= 2) {
    Answer.push(current);
  }

  // 結果を出力
  console.log(Answer.join(' '));

  // 入力ストリームを閉じる
  rl.close();
});
