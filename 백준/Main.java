import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();

    sc.nextLine();
    for(int i=0; i<n; i++){
      String str = sc.nextLine();
        System.out.println(str.charAt(0)+""+str.charAt(str.length() -1));
    }
  }
}
