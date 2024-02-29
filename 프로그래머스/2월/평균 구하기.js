function solution(arr) {
  // var answer = 0;
  // let sum = 0;
  // let length = arr.length;
  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  // }
  // return sum / length;
  //--------------------------------------------------------------위에가 내가 쓴 코드
  return arr.reduce((a, b) => a + b) / arr.length;
}

const arr = [1, 2, 3, 4];
solution(arr);
