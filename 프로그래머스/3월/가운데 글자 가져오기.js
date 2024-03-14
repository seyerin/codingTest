function solution(s) {
  var answer = "";
  if (s.length % 2 == 0) {
    const center = s.length / 2 - 1;
    answer = s[center] + s[center + 1];
  } else {
    const center = Math.floor(s.length / 2);
    answer = s[center];
  }
  console.log(answer);
  return answer;
}

const s = "qwer";

solution(s);
