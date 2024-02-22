function solution(n) {
  var answer = 0;
  let numArr = new Array(n + 1).fill(true); // n만큼 true로 채워진 배열 생성
  numArr[0] = numArr[1] = false; // 0, 1은 소수가 아니므로 false

  for (let i = 2; i <= Math.sqrt(n); i++) {
    // n의 제곱근 까지 반복하는데 그 이후의 수는 밑 반복문에서 false처리 함
    for (let j = i * i; j <= n; j += i) {
      numArr[j] = false; // i의 배수는 다 false처리
    }
  }

  for (let i = 2; i <= n; i++) {
    if (numArr[i]) {
      // true 개수 == 소수 개수
      answer++;
    }
  }
  return answer;
}

const n = 25;
solution(n);
