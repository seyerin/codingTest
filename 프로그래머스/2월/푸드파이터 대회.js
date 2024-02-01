function solution(food) {
  var answer = "";
  let length = 0;

  food.forEach((x, n) => {
    let num = x;
    if (x % 2 != 0 && n > 0) {
      num = x - 1;
      food[n] = x - 1;
    }
    length += num;
  });

  let cnt = 0;
  let idx = 1;
  let temp = [];

  while (Math.round(length / 2) > cnt) {
    temp[cnt] = idx;
    temp[length - cnt - 1] = idx;

    if (food[idx] == 0) {
      idx++;
      continue;
    }
    if (number(temp, idx) % food[idx] == 0) {
      idx++;
    }
    if (cnt == Math.floor(length / 2)) {
      temp[cnt] = 0;
      break;
    }
    cnt++;
  }
  answer = temp.join("");
  console.log(answer);
  return answer;
}

// function solution(food) {
//   let res = "";
//   for (let i = 1; i < food.length; i++) {
//     res += String(i).repeat(Math.floor(food[i] / 2));
//   }
//   console.log(res + "0" + [...res].reverse().join(""));
//   return res + "0" + [...res].reverse().join("");
// }

/*
  reverse() 쓰면 문자열, 배열 거꾸로 정렬해줌 
  [1,2,3] => [3,2,1]
  
  join("") => 배열 문자열로 만듬
  [1,2,3].join() => 1,2,3
  [1,2,3].join("") => 123
  
  repeat() => 문자열 반복
  "ㅁ".repeat(3) => ㅁㅁㅁ
*/

//---------------------------------------------------> 다른 사람 코드 지림
const food = [1, 3, 1, 4];
solution(food);

function number(arr, idx) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == idx) num++;
  }
  return num;
}
