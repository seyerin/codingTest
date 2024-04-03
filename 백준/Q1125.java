import java.math.BigInteger;
import java.util.Scanner;

public class Q1125 {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);

    String num1 = s.next();
    String num2 = s.next();

    long result = 0;

    for(int i=0; i<num1.length(); i++){
      for(int j=0; j<num2.length(); j++){
        result += (num1.charAt(i)-'0')*(num2.charAt(j)-'0');
      }
    }
    System.out.println(result);
  }
}
