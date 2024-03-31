import java.math.BigInteger;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String color1 = sc.nextLine();
    String color2 = sc.nextLine();
    String color3 = sc.nextLine();

String[] colorArr = new String[] {
    "black", "brown", "red","orange","yellow","green", "blue","violet","grey","white"
};

  int idx1 = Arrays.asList(colorArr).indexOf(color1);
  int idx2 = Arrays.asList(colorArr).indexOf(color2);
  int idx3 = Arrays.asList(colorArr).indexOf(color3);

  String result = Integer.toString((idx1*10)+idx2);
  
  for(int i = 0; i<idx3; i++){
    result += "0";
  }
  BigInteger n = new BigInteger(result);
  System.out.println(n);
  }
}
