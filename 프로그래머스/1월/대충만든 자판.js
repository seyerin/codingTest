function solution(keymap, targets) {
  var answer = [];
  let sum = 0;

  targets.forEach((x) => {
    for (let i = 0; i < x.length; i++) {
      let min = Infinity;
      keymap.forEach((y) => {
        let index = y.indexOf(x[i]);
        if (index > -1) {
          min = Math.min(min, index + 1);
        }
      });
      sum += min;
    }
    answer.push(sum);
    sum = 0;
  });
  answer = answer.map((e) => {
    if (e == Infinity) {
      e = -1;
    }
    return e;
  });
  /*
  19~24 코드 설명 
  answer에 answer.map의 결과를 할당 해 줄 것
  map을 이용의 answer의 배열 값 e를 뽐아낼 것이다
  이후 e가 infinity 즉 targets의 문자열을 만들 문자가 keymap에 없을 때 배열값 e의 값을 -1로 재할당 해준다
  그 뒤 return e를 한다
  이 때 return -1을 해버리면 문제에서 원하는 답안 형태를 지키지 못 했으며 
  targets의 첫번째 케이스는 실패하더라고 n번째 케이스는 성공할 수 있는데 이런 가능성을 무시하게 된다
  ex) 
  [-1, 6, 7] 이런식의 기댓값이 출력해야 하는대 return -1을 하면 뒤에 6, 7이 무시됨
  그래서 return값으로 값이 재할당된 배열 값을 주는 것
  그래야 문제에서 제시하는 배열 형태의 답안도 유지할 수 있기 때문이다
   */
  return answer;
}
const keymap = ["zzzz", "zzzz"];
const targets = ["ABCD", "AABB"];

solution(keymap, targets);
