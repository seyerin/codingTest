function solution(x) {
  var answer = false;
  let sum = 0;
  while (x > 0) {
    sum += x % 10;
    x = Math.floor(x / 10);
  }

  return !(x % num);
}

const x = 2515;
solution(x);
