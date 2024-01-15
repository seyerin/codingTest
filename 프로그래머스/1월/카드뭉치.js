function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    if (cards1[0] == goal[i]) {
      cards1.shift();
      continue;
    } else if (cards2[0] == goal[i]) {
      cards2.shift();
      continue;
    } else {
      return "No";
    }
  }

  return "Yes";
}

const cards1 = ["a", "b", "c"];
const cards2 = ["d", "e", "f"];
const goal = ["a", "d", "f"];

// const cards1 = ["def", "bcd"];
// const cards2 = ["b", "c", "d"];
// const goal = ["bcd"];

// const cards1 = ["list", "length", "important"];
// const cards2 = ["are", "very"];
// const goal = ["are", "very"];

solution(cards1, cards2, goal);
