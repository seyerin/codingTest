import java.math.BigInteger;
import java.util.Date;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String n = sc.nextLine();
    int f = sc.nextInt();

    String lastnum = n.charAt(n.length()-2) +""+ n.charAt(n.length()-1);
    int num = Integer.parseInt(n) - Integer.parseInt(lastnum);
    
    for(int i=1; i<=100; i++){
      if(num%f == 0){
        break;
      }
      num++;
    }
    n = Integer.toString(num);
    lastnum = n.charAt(n.length()-2)+""+n.charAt(n.length()-1);
    System.out.println(lastnum);
  }
}
