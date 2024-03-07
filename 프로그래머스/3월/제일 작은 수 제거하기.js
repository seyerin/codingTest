function solution(arr) {
  var answer = [];
  let min = Infinity;

  if (arr.length == 0 || arr[0] == 10) {
    return [-1];
  }

  arr.forEach((x) => {
    min = Math.min(min, x);
  });

  answer = arr.filter((x) => x != min);
  console.log(answer);
  return answer;
}

let arr = [4, 3, 2, 1];

solution(arr);
