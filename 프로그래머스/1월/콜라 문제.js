function solution(a, b, n) {
  var answer = 0;
  let remain = 0;
  while (Math.floor(n / a)) {
    answer += Math.floor(n / a) * b;
    remain = n % a;
    n = Math.floor(n / a) * b + remain; // 다음 계산한 병의 수는 (원래 가지고 있던 병 / 바꿀 수 있는 병의 최소 개수) * 빈병을 주고 받는 병의 최소 개수 + 이전에 바꾸고 남은 병의 수
  }
  return answer;
}

const a = 3;
const b = 2;
const n = 20;

solution(a, b, n);
