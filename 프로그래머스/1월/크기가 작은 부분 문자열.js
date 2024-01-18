function solution(t, p) {
  var answer = 0;
  let letter = [];
  let split = [];
  let splitLength = p.length;
  let cnt = 0;
  for (let i = 0; i < t.length; i++) {
    letter.push(t[i]);
  }

  for (let i = 0; i < t.length; i++) {
    let string = "";
    while (cnt < splitLength) {
      string += t[i + cnt];
      cnt++;
    }
    split.push(string);
    cnt = 0;
  }

  let arr = split.filter((x) => x.length == splitLength);

  arr.forEach((x) => {
    if (p >= x) {
      answer++;
    }
  });
  return answer;
}

// const t = "3141592";
// const p = "271";

// const t = "500220839878";
// const p = "7";

const t = "10203";
const p = "15";

solution(t, p);

console.log(0.4 + 0.2);
