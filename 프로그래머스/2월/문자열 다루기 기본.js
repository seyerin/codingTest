function solution(s) {
  var answer = false;
  let notNumber = s.search(/(\D)/);
  if (notNumber == -1) {
    if (s.length == 4 || s.length == 6) {
      answer = true;
    }
  }

  return answer;
}

const s = "1234";

solution(s);
