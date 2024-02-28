// function solution(strings, n) {
//   strings.sort((a, b) => {
//     if (a[n] !== b[n]) {
//       return a[n] > b[n] ? 1 : -1;
//     }
//     return a > b ? 1 : -1;
//   });
//   return strings;
// }

const strings = ["abce", "cdx", "abcd", "abcf", "cex"];
// const strings = ["car", "bed", "sun"];
const n = 2;
solution(strings, n);

// console.log("abcd".localeCompare("abce"));

/*
sort -1 => b-a
sort 1 => a-b


다른 사람 답

// function solution(strings, n) {
//   // strings 배열
//   // n 번째 문자열 비교
//   strings.sort((s1, s2) => {
//     return s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]);
//   });

//   console.log(strings);
// }
*/
