function solution(a, b) {
  var answer = "";
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dateArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let start = 0;
  let date = 0;
  for (let i = 0; i < a - 1; i++) {
    date += dateArr[i];
  }
  date += b;
  for (let i = 0; i < date - 1; i++) {
    start++;
    if (start > 6) {
      start = 0;
    }
  }
  answer = day[start];
  return answer;
}

const a = 5;
const b = 24;
solution(a, b);
