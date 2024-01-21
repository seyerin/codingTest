function solution(price, money, count) {
  var answer = 0;
  let cost = 0;
  for (let i = 1; i <= count; i++) {
    cost += price * i;
  }
  // answer = a;
  if (cost < money) return 0;
  answer = cost - money;
  return answer;
}

const price = 3;
const money = 20;
const count = 4;

solution(price, money, count);
