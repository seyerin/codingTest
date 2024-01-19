function solution(s) {
  var answer = [];
  let letter = s.split("");
  let location = [];
  let locationNum = [];
  letter.forEach((x, n) => {
    if (location.indexOf(x) == -1) {
      answer.push(-1);
      location.push(x);
      locationNum.push(n);
    } else {
      let indexNum = locationNum[location.indexOf(x)];
      console.log(x, indexNum);
      answer.push(n - indexNum);
      location[indexNum] = null;
      location.push(x);
      locationNum.push(n);
    }
  });
  return answer;
}

const s = "foobar";

solution(s);
