function solution(id_list, report, k) {
  var answer = [];
  let id = {};
  id_list.forEach((name) => {
    id[name] = {
      receive: 0,
      reportMan: [],
      report: {},
    };
    id_list.forEach((x) => {
      id[name].report[x] = 0;
    });
  });

  report.forEach((x) => {
    let split = x.split(" ");
    id[split[0]].report[split[1]] = id[split[0]].report[split[1]] + 1;
    if (id[split[1]].reportMan.indexOf(split[0]) == -1) {
      id[split[1]].receive = id[split[1]].receive + 1;
      id[split[1]].reportMan.push(split[0]);
    }
  });
  let stop = [];
  id_list.forEach((x) => {
    if (id[x].receive >= k) {
      stop.push(x);
    }
  });
  let cnt = 0;
  id_list.forEach((x) => {
    stop.forEach((y) => {
      if (id[x].report[y] > 0) {
        cnt++;
      }
    });
    answer.push(cnt);
    cnt = 0;
  });

  console.log(answer);
  return answer;
}

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

// const id_list = ["con", "ryan"];
// const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
// const k = 3;

solution(id_list, report, k);
