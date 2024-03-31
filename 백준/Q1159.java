import java.util.Arrays;
import java.util.Scanner;

public class Q1159 {
  public static void main(String[] args) {
    int[] arr = new int[26];
    Scanner s = new Scanner(System.in);
    int n = s.nextInt();
    boolean possible = false;

    s.nextLine();

    for(int i=0; i<n; i++){
      String name = s.nextLine();
      char firstChar = name.charAt(0);
      arr[firstChar-'a']++;
    }

    for(int i=0; i<26; i++){
      if(arr[i] >= 5){
        System.out.print((char)(i+'a'));
        possible=true;
      }
    }
    if(!possible){
      System.out.println("PREDAJA");
    }
  }
}
