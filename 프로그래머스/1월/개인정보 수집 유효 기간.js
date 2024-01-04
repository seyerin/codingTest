function solution(today, terms, privacies) {
  var answer = [];

  privacies.forEach((x, n) => {
    let privaciesSplit = x.split(" "); // 공백 문자를 기준으로 개인정보 수집 날짜와 약관을 나눔
    // let privaciesDate = privaciesSplit[0].split("."); // .을 기준으로 개인정보 수집 날짜를 년, 월, 일로 나누어줌

    terms.forEach((y) => {
      let termsSplit = y.split(" "); // 공백 기준으로 약관과 보관 날짜 나눔
      if (termsSplit[0] == privaciesSplit[1]) {
        let modifiedNum = dateFunc(privaciesSplit[0], termsSplit[1]);

        const todayDate = new Date(today);
        const modifiedDate = new Date(modifiedNum);

        todayDate.setDate(todayDate.getDate() + 1);
        modifiedDate.setDate(modifiedDate.getDate() + 1);

        if (todayDate > modifiedDate) {
          answer.push(n + 1);
        }
      }
    });
  });
  console.log(answer);
  return answer;
}

function dateFunc(privacie, term) {
  let splitNum;
  let year;
  let month;
  let day;
  let termDay = 28 * term; // 한달을 28일만 있다 가정
  let result;

  splitNum = privacie.split(".");

  year = splitNum[0];
  month = splitNum[1];
  day = splitNum[2];

  let cnt = 1;
  while (termDay > cnt) {
    // 주어진 term만큼 반복하며 day 더해줌
    day++;
    if (day == 29) {
      day = 1;
      month++;
      if (month > 12) {
        month = 1;
        year++;
      }
    }
    cnt++;
  }

  year = String(year);
  month = String(month);
  day = String(day);

  //month, day의 길이가 1일  때 앞에 0이 붙음
  if (month.length == 1) {
    month = 0 + month;
  }
  if (day.length == 1) {
    day = 0 + day;
  }

  result = year + "." + month + "." + day;
  return result;
}

const today = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const privacies = [
  "2021.05.02 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C",
];

solution(today, terms, privacies);
