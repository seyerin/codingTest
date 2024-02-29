function solution(x) {
  var answer = false;
  let split = x.toString().split("");
  let sum = 0;
  for (let i = 0; i < split.length; i++) {
    sum += Number(split[i]);
  }

  if (x % sum == 0) answer = true;
  console.log(answer);
  return answer;
}

const x = 2515;
solution(x);
