import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);

    int num = s.nextInt();
    int[] arr = new int[num];
    
    int min = 1000000000;
    int max = 0;
    for(int i=0; i<num; i++){
      arr[i] = s.nextInt();
      min = Math.min(min, arr[i]);
      max = Math.max(max, arr[i]);
    }
    System.out.println(min*max);
  }
}
