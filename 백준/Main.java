import java.math.BigInteger;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String[] arr = new String[8];

    for(int i = 0; i<8; i++){
        arr[i] = sc.nextLine();
    }
    int cnt =0;

    for(int i=1; i<=8; i++){
      if(i%2 == 0){
        for(int j=1; j<=8; j++){
          if(j%2 == 0){
            if(arr[i-1].charAt(j-1) == 'F'){
              cnt++;
            }
          }
        }
      }
      else{
        for(int j=1; j<=8; j++){
          if(j%2 != 0){
            if(arr[i-1].charAt(j-1) == 'F'){
              cnt++;
            }
          }
        }
      }
    }
    System.out.println(cnt);
  }
}
