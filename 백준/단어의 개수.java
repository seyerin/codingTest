import java.math.BigInteger;
import java.util.Arrays;
import java.util.Scanner;
import java.util.regex.Pattern;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String str =sc.nextLine();
    str = str.trim();
    String[] splitArr = str.split(" ");
    int cnt = 0;

    if(str.equals("")){ // 공백이 연속 3개 들어올 수도 있으니 예외 처리 해줘야 함
      System.out.println(0);
      return;
    }

    System.out.println(splitArr.length);
  }
}
