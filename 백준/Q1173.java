import java.util.Scanner;

public class Q1173 {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int n = s.nextInt();
    int m = s.nextInt();
    int M = s.nextInt();
    int t = s.nextInt();
    int r = s.nextInt();

    int x = m;

    int cnt = 0;
    int result = 0;

    while (cnt!=n) {
      if((x+t) > M){
        x-=r;
        if(x < m){
          x = m;
        }
      }
      else{
        x+=t;
        cnt++;
      }
      result++;
      if(result > 210000000){
        System.out.println(-1);
        return;
      }
    }
    
    System.out.println(result);
  }
}
