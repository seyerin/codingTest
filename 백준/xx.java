import java.util.*;

public class xx {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String str = sc.nextLine();
    String[] alphaArr = {"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"};
    int[] numArr = new int[26];
    for(int i=0; i<26; i++){
      numArr[i] = 0;
    }
    String[] strArr = new String[str.length()];
    for(int i = 0; i < str.length(); i++) {
      strArr[i] = Character.toString(str.charAt(i));
    }
    int maxNum = 0;
    for (String s : strArr) {
      int idx = Arrays.asList(alphaArr).indexOf(s.toUpperCase());
      numArr[idx] += 1;
      maxNum = Math.max(maxNum, numArr[idx]);
    }
    int idx = 0;
    int cnt =0;
    for (int i = 0; i<26; i++) {
      if(maxNum == numArr[i]){
        idx = i;
        cnt++;
      }
    }
    if(cnt > 1){
      System.out.println("?");
    }
    else{
      System.out.println(alphaArr[idx]);
    }
    sc.close();
  }
}

