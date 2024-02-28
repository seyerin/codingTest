function solution(n, arr1, arr2) {
  var answer = [];
  let first = [];
  let second = [];

  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(Array(n));
  }

  arr1.forEach((x) => {
    let num = x.toString(2);
    let zero = "0";
    if (num.length < n) {
      for (let i = 1; i < n - num.length; i++) {
        zero = zero + "0";
      }
      num = zero + num;
    }
    first.push(num);
  });

  arr2.forEach((x) => {
    let num = x.toString(2);
    let zero = "0";
    if (num.length < n) {
      for (let i = 1; i < n - num.length; i++) {
        zero = zero + "0";
      }
      num = zero + num;
    }
    second.push(num);
  });

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (first[i][j] == second[i][j]) {
        if (first[i][j] == 1) {
          arr[i][j] = "#";
        } else {
          arr[i][j] = " ";
        }
      } else {
        arr[i][j] = "#";
      }
    }
  }

  arr.forEach((x) => {
    answer.push(x.join(""));
  });

  console.log(first, second);
  console.log(arr);

  console.log(answer);
  return answer;
}

const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];

solution(n, arr1, arr2);

/*

function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}
*/
