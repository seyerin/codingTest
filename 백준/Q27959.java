import java.util.Scanner;

public class Q27959 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int n = sc.nextInt();
    int m = sc.nextInt();

    if(n*100 >= m){
      System.out.println("Yes");
    }
    else{
      System.out.println("No");
    }
  }
}
