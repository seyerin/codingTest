// function solution(nums) {
// var answer = 1;
// nums.sort((a, b) => a - b);
// let current = nums[0];
// let limit = nums.length / 2;
// for (let i = 0; i < nums.length; i++) {
//   if (answer == limit) break;
//   if (nums[i] != current) {
//     answer++;
//     current = nums[i];
//   }
// }
// console.log(answer);
// return answer;
// }

// function solution(nums) {
//   let arr = [...new Set(nums)];
//   let max = arr.length / 2;
//   console.log(max, arr.length);
//   // return arr.length > max ? max : arr.length;
// }

function solution(nums) {
  let answer = 0;
  const select = nums.length / 2;
  const check = nums.reduce((total, cur) => {
    console.log(total);
    total[cur] ? total[cur]++ : (total[cur] = 1);
    return total;
  }, {});
  // console.log(check);
  const checkLeng = Object.keys(check).length;
  return checkLeng > select ? select : checkLeng;
}

const nums = [3, 1, 2, 4];

// solution(nums);
