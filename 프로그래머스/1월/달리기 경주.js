// /*
const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "kai", "mine", "mine"];
// result[("mumu", "kai", "mine", "soe", "poe")];
// */

function solution(players, callings) {
  var answer = [];
  let obj = {};
  players.forEach((el, n) => {
    // console.log(el);
    obj[el] = n;
  });
  for (let i of callings) {
    let num = obj[i];
    let temp = players[num - 1];
    players[num - 1] = players[num];
    players[num] = temp;

    obj[players[num - 1]] = num - 1;
    obj[players[num]] = num;
  }
  answer = players;
  console.log(answer);
  return answer;
}

solution(players, callings);

/*
indexOf를 사용해서 callings에서 호명한 이름의 위치를 찾아도 되지만 이를 사용하면 시간 오버됨
고로 obj를 사용해서 찾는데 왜 그렇게 되는지는 모르겠음
*/
