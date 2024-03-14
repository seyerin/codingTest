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

function solution(nums) {
  let arr = [...new Set(nums)];
  let max = arr.length / 2;
  console.log(max, arr.length);
  // return arr.length > max ? max : arr.length;
}

const nums = [3, 1, 2, 4];
solution(nums);
