import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 最大公約数を求める関数
function GCD(A: number, B: number): number {
  while (A !== 0 && B !== 0) {
    if (A < B) {
      B = B % A;
    } else {
      A = A % B;
    }
  }
  return A === 0 ? B : A;
}

// ユーザーから2つの整数の入力を受け取る
rl.question('2つの整数を入力してください（スペース区切り）: ', (input) => {
  const numbers = input.split(' ').map((item) => Number(item));
  // const numbers = input.split(' ').map(Number); でもOK
  const A = numbers[0];
  const B = numbers[1];

  if (numbers.length !== 2 || isNaN(A) || isNaN(B)) {
    console.log('正確に2つの整数をスペース区切りで入力してください。');
    rl.close();
    return;
  }

  // 最大公約数を計算して出力
  const result = GCD(A, B);
  console.log(`最大公約数は ${result} です。`);

  // 入力ストリームを閉じる
  rl.close();
});
