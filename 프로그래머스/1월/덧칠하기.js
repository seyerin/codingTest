function solution(n, m, section) {
  var answer = 0;
  let check = [];
  let cnt = 0;
  while (check.length != section.length) {
    for (let i = section[cnt]; i < section[cnt] + m; i++) {
      if (section.indexOf(i) != -1) {
        check.push(i);
      }
    }
    cnt = check.length;
    answer++;
  }
  console.log(answer);
  return answer;
}

const n = 5;
const m = 4;
const section = [1, 3];
solution(n, m, section);
