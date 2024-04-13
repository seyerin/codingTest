import java.util.Scanner;

public class Q26082 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int A = sc.nextInt();
    int B = sc.nextInt();
    int C = sc.nextInt();

    int competitor = B/A;

    int waboi = competitor*3;

    System.out.println(waboi * C);
  }
}