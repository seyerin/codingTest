function solution(today, terms, privacies) {
  var answer = [];

  let temp = [];
  let privaciesYear = [];
  let privaciesMonth = [];
  let privaciesDay = [];
  let privaciesTerms = [];

  let termsArr = [];

  privacies.forEach((x) => {
    let date = x.replaceAll(".", "");
    privaciesYear.push(Number(date.slice(0, 4)));
    privaciesMonth.push(Number(date.slice(4, 6)));
    privaciesDay.push(Number(date.slice(6, 8)));

    terms.forEach((y) => {
      if (x.slice(x.length - 1) == y.slice(0, 1)) {
        privaciesTerms.push(Number(y.slice(y.length - 2, y.length)));
      }
    });
  });
  terms.forEach((x) => {
    termsArr[Number(x.slice(x.length - 2))] = Number(x.slice(x.length - 2));
  });

  for (let i = 0; i < privacies.length; i++) {
    if (privaciesMonth[i] + termsArr[privaciesTerms[i]] > 12) {
      privaciesYear[i]++;
      privaciesMonth[i] = privaciesMonth[i] + termsArr[privaciesTerms[i]] - 12;
      temp.push(
        String(privaciesYear[i]) + String(privaciesMonth[i]) + privaciesDay[i]
      );
    } else {
      privaciesMonth[i] = privaciesMonth[i] + termsArr[privaciesTerms[i]];
      temp.push(
        String(privaciesYear[i]) + String(privaciesMonth[i]) + privaciesDay[i]
      );
    }
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i].slice(temp[i].length - 1) - 1 == 0) {
      privaciesMonth[i]--;
      privaciesDay[i] = 28;
      temp[i] =
        String(privaciesYear[i]) + String(privaciesMonth[i]) + privaciesDay[i];
    } else {
      temp[i]--;
    }
  }

  today = today.replaceAll(".", "");
  let now = today.slice(0, 4);
  now = now + Number(today.slice(4, 6));
  now = now + Number(today.slice(6, 8));

  for (let i = 0; i < privacies.length; i++) {
    if (temp[i] == now) {
      continue;
    } else if (String(temp[i]).slice(0, 4) < now.slice(0, 4)) {
      answer.push(i + 1);
    } else if (
      String(temp[i]).slice(0, 4) == now.slice(0, 4) &&
      String(temp[i]).slice(4, 5) <= now.slice(4, 5) &&
      String(temp[i]).slice(5, 7) < now.slice(5, 7)
    ) {
      answer.push(i + 1);
    }
  }
  console.log(temp);
  console.log(answer);
  answer = answer.sort();
  return answer;
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
