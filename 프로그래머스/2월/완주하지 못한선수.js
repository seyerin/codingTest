function solution(participant, completion) {
  var answer = "";
  let obj = {};
  participant.forEach((x) => {
    if (obj[x] == undefined) obj[x] = 1;
    else obj[x] += 1;
  });

  completion.forEach((x) => {
    obj[x] -= 1;
    if (obj[x] == 0) delete obj[x];
  });
  answer = Object.keys(obj)[0];
  return answer;
}

const participant = ["A", "B", "C", "C"];
const completion = ["B", "C", "A"];

solution(participant, completion);
