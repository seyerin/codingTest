import java.math.BigInteger;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
      Scanner sc = new Scanner(System. in);
      BigInteger a = sc.nextBigInteger();
      BigInteger b = sc.nextBigInteger();
      if(a.compareTo(b) == 1){
        System.out.println(a.subtract(b));
      }
      else{
        System.out.println(b.subtract(a));
      }
    }
}
