// 1271번 문제
import java.math.BigInteger;
import java.util.*;

class Number{
  static int num = 0;
  int num2 = 0;
}

public class Temp {
  public static void main(String [] args){
    Number a1 = new Number();
    Number a2 = new Number();

    a1.num++;
    a1.num2++;

    System.out.println(a2.num +" " + a2.num2);
  }
}