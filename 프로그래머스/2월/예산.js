function solution(d, budget) {
  // var answer = 0;
  // d.sort((a, b) => a - b);
  // let money = 0;
  // console.log(d);
  // d.forEach((x) => {
  //   money += x;
  //   if (money <= budget) answer++;
  // });
  // console.log(answer);
  // return answer;
}

const d = [30000, 1000, 2000, 50000, 60000, 500, 95000];
const budget = 100000;

solution(d, budget);

/*

return d
  .sort((a, b) => a - b)
  .reduce((count, price) => {
    return count + ((budget -= price) >= 0);
  }, 0);
  
  */
