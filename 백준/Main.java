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

    for(int i=0; i<8; i++){
      for(int j=0; j<8; j++){
        if(j%2 == 0){
          if(arr[i].charAt(j) == 'F'){
            cnt++;
          }
        }
      }
    }
    System.out.println(cnt);
  }
}
