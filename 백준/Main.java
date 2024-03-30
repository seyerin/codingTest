import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int a =sc.nextInt();
    int b =sc.nextInt();
    int c =sc.nextInt();

    sc.close();
    int min = 1000000;
    int max = -1111111;

    min = Math.min(a, b);
    min = Math.min(min, c);

    max = Math.max(a, b);
    max = Math.max(max, c);



    if(min < a & max > a){
      System.out.println(a);
    }
    else if(min < b & max > b){
      System.out.println(b);
    }
    else {
      System.out.println(c);
    }
  }
}
