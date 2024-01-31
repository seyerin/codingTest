function solution(number, limit, power) {
  var answer = 0;
  let temp = [];

  for (let i = 1; i <= number; i++) {
    temp.push(divisor(i));
  }

  function divisor(num) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      // 제곱근을 구해서 약수 구하는 로직을 줄여줌
      if (i == Math.sqrt(num)) count += 1;
      else if (num % i == 0) count += 2;
    }
    return count;
  }
  temp.forEach((x) => {
    if (x > limit) {
      answer += power;
    } else {
      answer += x;
    }
  });

  return answer;
}

const number = 5;
const limit = 3;
const power = 2;

solution(number, limit, power);
// console.log(Math.sqrt(12));
/*
  제곱근을 사용하지 않았을 때는 1부터 하나씩 올라가면서 현재 숫자와 number가 같을 때 cnt를 저장했다

  제곱근을 사용하면 number을 현재 숫자로 나누었을 때 나머지가 0이라면 cnt를 2 증가시키고 현재 숫자가 제곱근과 같을 때 cnt를 1 증가시켜줌
  => 반복횟수를 줄임

  ex) number = 12
  제곱근 3
  현재 숫자가 1일 때 -> 1 12 cnt=2
  현재 숫자가 2일 때 -> 2 6 cnt=4
  현재 숫자가 3일 때 -> 3 4 cnt=6

  아마 제곱근이 정확한 3이 아니라서 현재 숫자가 제곱근과 같다는 조건에 걸리지 않는 듯 함
*/
