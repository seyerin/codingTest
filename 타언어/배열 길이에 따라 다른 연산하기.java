class Solution {
  public int[] solution(int[] arr, int n) {
      int[] answer = {};
      for(int i =0; i<arr.length; i++){
          if(arr.length %2 == 0){
          if(i %2 != 0){
              arr[i] += n;
          }
      }
       else{
           if(i%2 == 0){
              arr[i] += n; 
           }
       }
      }
      for(int i = 0; i<arr.length; i++){
      System.out.println(arr[i]);
      }
      return arr;
  }
}