function solution(new_id) {
  var answer = "";
  let split = new_id.split("");

  let temp = [];
  split.forEach((i, n) => {
    if (
      (i >= "a" && i <= "z") ||
      (i >= "A" && i <= "Z") ||
      (i >= 0 && i <= 9) ||
      i == "." ||
      i == "-" ||
      i == "_"
    ) {
      if (i >= "A" && i <= "Z") i = i.toLowerCase();
      temp.push(i);
    }
  });

  let i = 0;
  while (i <= temp.length) {
    if (temp[i] == ".") {
      if (i == 0) {
        temp.splice(i, 1);
        i--;
      } else if (i == temp.length - 1) {
        temp.splice(i, 1);
        i--;
      }
      if (temp[i] == "." && temp[i + 1] == ".") {
        temp.splice(i, 1);
        i--;
      }
    }
    i++;
  }
  if (temp.length > 15) {
    temp.splice(15);
    if (temp[temp.length - 1] == ".") {
      temp.splice(temp.length - 1, 1);
    }
  }

  if (temp.length == 0) {
    temp.push("a");
  }

  if (temp.length < 3) {
    for (let i = temp.length; i < 3; i++) {
      temp.push(temp[temp.length - 1]);
    }
  }

  answer = temp.toString().replaceAll(",", "");
  console.log(answer);
  return answer;
}

const new_id = "abcdefghijklmn.p";
solution(new_id);
