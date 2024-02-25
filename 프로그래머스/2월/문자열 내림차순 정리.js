function solution(s) {
  var answer = "";
  let split = s.split("");
  let alpha = [];
  split.forEach((x) => {
    alpha.push(x.charCodeAt());
  });
  alpha.sort((a, b) => b - a);
  alpha.forEach((x) => {
    answer += String.fromCharCode(x);
  });
  console.log(answer);
  return answer;
}

const s = "ZbcdFfg";

solution(s);
