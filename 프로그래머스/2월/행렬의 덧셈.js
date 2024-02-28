function solution(arr1, arr2) {
  var answer = [];
  let outside = 0;
  let inside = 0;
  let temp = [];

  while (outside != arr1.length) {
    temp.push(arr1[outside][inside] + arr2[outside][inside]);
    if (inside == arr1[0].length - 1) {
      answer.push(temp);
      temp = [];
      outside++;
      inside = 0;
    } else inside++;
  }
  console.log(answer);
  return answer;
}

const arr1 = [[1], [2]];
const arr2 = [[3], [4]];
solution(arr1, arr2);
