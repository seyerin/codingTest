import java.math.BigInteger;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int time = s.nextInt();
    int sake = s.nextInt();

    int rice = 0;

    if(time >= 12 && time<=16){
      if(sake == 1){
        rice = 280;
      }
      else{
        rice = 320;
      }
    }
    else{
      rice = 280;
    }
    System.out.println(rice);
  }
}
