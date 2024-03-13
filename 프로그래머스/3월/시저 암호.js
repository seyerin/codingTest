function solution(s, n) {
  let answer = s
    .split("")
    .map((x) => {
      const code = x.charCodeAt();
      // console.log(code);
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code + n - 97) % 26) + 97);
      } else if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code + n - 65) % 26) + 65);
      }

      return " ";
    })
    .join("");
  console.log(answer);
  return answer;
}

const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const n = 1;

solution(s, n);

/*
function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}

*/
