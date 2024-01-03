function solution(name, yearning, photo) {
  var answer = [];
  photo.forEach((x, n) => {
    x.forEach((y) => {
      name.forEach((z, n2) => {
        if (answer[n] == undefined) {
          answer[n] = 0;
        }
        if (z == y) {
          // console.log(answer[n]);
          answer[n] = answer[n] + yearning[n2];
        }
      });
    });
  });
  console.log(answer);
  return answer;
}

// const name = ["may", "kein", "kain", "radi"];
// const yearning = [5, 10, 1, 3];
// const photo = [
//   ["may", "kein", "kain", "radi"],
//   ["may", "kein", "brin", "deny"],
//   ["kon", "kain", "may", "coni"],
// ];

const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [["may"], ["kein", "deny", "may"], ["kon", "coni"]];

// const name = ["kali", "mari", "don"];
// const yearning = [11, 1, 55];
// const photo = [
//   ["kali", "mari", "don"],
//   ["pony", "tom", "teddy"],
//   ["con", "mona", "don"],
// ];

solution(name, yearning, photo);
