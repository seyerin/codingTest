// function solution(board, moves) {
//   var answer = 0;
//   let cart = [];
//   let cnt = 0;
//   let moveCnt = 0;

//   while (moveCnt != moves.length) {
//     for (let i = 0; i < board.length; i++) {
//       if (board[i][moves[cnt] - 1] != 0) {
//         cart.push(board[i][moves[cnt] - 1]);
//         board[i][moves[cnt] - 1] = 0;
//         if (cart[cart.length - 1] == cart[cart.length - 2]) {
//           console.log(cart[cart.length - 1], cart[cart.length - 2]);
//           cart.pop();
//           answer+=2;
//           cart.pop();
//           console.log(cart);
//         }
//         cnt++;
//         break;
//       }
//     }
//     moveCnt++;
//   }
//   return answer;
// }

const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const solution = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );
  console.log(stacks);
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

solution(board, moves);
