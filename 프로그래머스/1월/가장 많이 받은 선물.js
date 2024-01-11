function solution(friends, gifts) {
  var answer = 0;
  let getGifts = {};
  friends.forEach((name) => {
    getGifts[name] = {
      give: [],
      get: [],
      gift: {},
    };
  });
  friends.forEach((name) => {
    friends.forEach((el) => {
      if (name != el) getGifts[name].gift[el] = 0;
    });
  });
  gifts.forEach((el) => {
    let split = el.split(" ");
    getGifts[split[0]].give.push(split[1]);
    getGifts[split[1]].get.push(split[0]);

    getGifts[split[1]].gift[split[0]] = getGifts[split[1]].gift[split[0]] + 1;
    getGifts[split[0]].gift[split[1]] = getGifts[split[0]].gift[split[1]] - 1;
  });
  friends.forEach((el) => {
    getGifts[el].num = getGifts[el].give.length - getGifts[el].get.length;
  });

  friends.forEach((name) => {
    friends.forEach((el) => {
      if (getGifts[name].gift[el] == 0) {
        if (getGifts[name].num > getGifts[el].num) {
          getGifts[name].gift[el] = getGifts[name].gift[el] - 1;
        }
      }
    });
  });
  friends.forEach((name) => {
    let cnt = 0;
    Object.values(getGifts[name].gift).forEach((x) => {
      if (x < 0) {
        cnt++;
      }
    });
    answer = Math.max(answer, cnt);
  });
  return answer;
}

const friends = ["a", "b", "c"];
const gifts = ["a b", "b a", "c a", "a c", "a c", "c a"];

solution(friends, gifts);
