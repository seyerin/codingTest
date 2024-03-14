function solution(strArr) {
  strArr.sort((a, b) => a.length - b.length);

  let arr = Array(31).fill(0);

  for (let s of strArr) {
    arr[s.length]++;
  }
  max = Math.max(...arr);
  return max;
}

// const strArr = ["a", "bc", "d", "efg", "hi"];
const strArr = [
  "a",
  "b",
  "d",
  "efg",
  "hi",
  "asd",
  "sdf",
  "asdf",
  "awert",
  "a",
  "ass",
  "aaa",
  "sdf",
  "asdf",
  "awert",
  "Aa",
  "a",
  "a",
  "a",
  "aaaa",
];
solution(strArr);
