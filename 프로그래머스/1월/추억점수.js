function solution(name, yearning, photo) {
  var answer = [];
  photo.forEach((x, n) => {
    // 2중 배열의 겉 배열 순회
    x.forEach((y) => {
      // 2중 배열이 속 배열 순회(사진 속 사람들)
      name.forEach((z, n2) => {
        // 내가 추억하는 사람들
        if (answer[n] == undefined) {
          // answer에 값을 넣을 건데 나중에 answe+yearning 할거라 초기값 0 넣어줌
          answer[n] = 0;
        }
        if (z == y) {
          answer[n] = answer[n] + yearning[n2]; // 추억점수 합산
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
