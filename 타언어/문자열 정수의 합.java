public class 문자열 정수의 합 {
  class Solution {
    public int solution(String num_str) {
        int answer = 0;
        String [] strArr = num_str.split("");
        for(int i=0; i<strArr.length; i++){
            // System.out.println(strArr[i]);
            answer += Integer.parseInt(strArr[i]);
        }
        return answer;
    }
}
}
