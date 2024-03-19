class Solution {
  public int solution(String[][] board, int h, int w) {
      int answer = 0;
      if(h>0 && board[h-1][w].equals(board[h][w])){
          answer++;
      }
      if(w>0 && board[h][w-1].equals(board[h][w])){
          answer++;
      }
      if(board.length-1 > h && board[h+1][w].equals(board[h][w])){
          answer++;
      }
      if(board[0].length-1 > w && board[h][w+1].equals(board[h][w])){
          answer++;
      }
      return answer;
  }
}