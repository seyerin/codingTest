function solution(s) {
  var answer = "";
  let split = s.split(" ");
  console.log(split);
  split.forEach((x, n) => {
    for (let i = 0; i < x.length; i++) {
      if (i % 2 == 0) {
        answer += x[i].toUpperCase();
      } else {
        answer += x[i].toLowerCase();
      }
    }
    if (n != split.length - 1) {
      answer += " ";
    }
  });
  console.log(answer);
  return answer;
}

const s = "try hello world";

solution(s);
