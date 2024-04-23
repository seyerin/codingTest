import java.util.Scanner;

public class Q28701 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int n = sc.nextInt();
    int r1 = 0;
    double r3 = 0;
    
    for(int i=1; i<=n; i++){
      r1 += i;
      r3 += Math.pow(i, 3);
    }
    System.out.println(r1);
    System.out.println((int)Math.pow(r1, 2));
    System.out.println((int)r3);
  }
}
 {
  
}
