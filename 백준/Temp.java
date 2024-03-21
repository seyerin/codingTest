// 1271번 문제
import java.math.BigInteger;
import java.util.*;
public class Temp {
  public static void main(String [] args){
    Scanner sc = new Scanner(System.in);
    BigInteger m = sc.nextBigInteger();
    BigInteger n = sc.nextBigInteger();
    sc.close();
    System.out.println(m.divide(n));
    System.err.println(m.remainder(n));
  }
}