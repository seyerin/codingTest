import java.math.BigInteger;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int e = sc.nextInt();
    int s = sc.nextInt();
    int m = sc.nextInt();

    int temE=0, temS=0, temM=0, cnt=0;
    while(true){
      if(temE == e && temS == s && temM == m){
        break;
      }
      temE++;
      temS++;
      temM++;
      if(temE == 15){
        temE = 0;
      }
      if(temS == 28){
        temS = 0;
      }
      if(temM == 19){
        temM = 0;
      }
      cnt++;
    }
    System.out.println(cnt);
  }
}
