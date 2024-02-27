function solution(s) {
  var answer = false;
  let pCnt = 0;
  let yCnt = 0;
  let split = s.split("");

  split.forEach((x) => {
    if ("p" == x || "P" == x) pCnt++;
    else if ("y" == x || "Y" == x) yCnt++;
  });

  if (pCnt == yCnt) answer = true;
  return answer;
}

const s = "pPoooyY";
solution(s);
