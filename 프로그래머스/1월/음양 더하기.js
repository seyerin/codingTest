function solution(absolutes, signs) {
  var answer = 0;
  absolutes.forEach((x, n) => {
    signs[n] ? (answer += x) : (answer -= x);
  });
  return answer;
}

const absolutes = [4, 7, 12];
const signs = [true, false, true];

solution(absolutes, signs);
