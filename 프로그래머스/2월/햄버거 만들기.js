function solution(ingredient) {
  var answer = 0;
  let temp = [];

  for (let i = 0; i < ingredient.length; i++) {
    temp.push(ingredient[i]);

    if (temp.slice(-4).join("") == "1231") {
      // slice(-4) / splice(-4) => 뒤에서 부터 4자리
      answer++;
      temp.splice(-4);
    }
  }
  return answer;
}

const ingredient = [2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 3, 1, 3, 1];

solution(ingredient);
//1231
