class Solution {
  public int[] solution(int[] num_list) {
      int length = num_list.length;
      int[] answer = new int[length +1];
      for(int i = 0; i < length; i++){
          answer[i] = num_list[i];
      }
      
      int a = answer[length- 1];
      int b = answer[length - 2];
      
      if(a>b){
          answer[length] = a-b;
      }
      else{
          answer[length] = a*2;
      }
      return answer;
  }
}