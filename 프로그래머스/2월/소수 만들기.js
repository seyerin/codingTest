function solution(nums) {
  var answer = 0;
  let cnt = 0;
  let cnt2 = 1;
  let cnt3 = 2;

  if (nums.length == 3) {
    answer += decimal(nums[cnt], nums[cnt2], nums[cnt3]) ?? 0;
  } else {
    while (cnt != nums.length - 3) {
      if (cnt3 == nums.length) {
        cnt2++;
        cnt3 = cnt2 + 1;
      }
      if (cnt2 == nums.length - 1 && cnt3 == nums.length) {
        cnt++;
        cnt2 = cnt + 1;
        cnt3 = cnt2 + 1;
      }
      answer += decimal(nums[cnt], nums[cnt2], nums[cnt3]) ?? 0;
      cnt3++;
    }
  }
  console.log(answer);
  return answer;
}
function decimal(n1, n2, n3) {
  let sum = n1 + n2 + n3;
  if (sum % 2 != 0) {
    for (let i = 2; i <= Math.sqrt(sum); i++) {
      if (sum % i == 0) {
        return 0;
      }
    }
    return 1;
  }
}

const nums = [1, 6, 4];

solution(nums);
