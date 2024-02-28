function solution(phone_number) {
  var answer = "";
  let cut = phone_number.length - 4;
  let lastNum = phone_number.substring(cut, phone_number.length);
  answer = "*".repeat(cut) + lastNum;

  return answer;
}

const phone_number = "01033334444";

solution(phone_number);
