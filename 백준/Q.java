import java.util.Scanner;

public class Q {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);

    int n = s.nextInt();

    String[] arr = new String[n];
    StringBuilder str = new StringBuilder();

    for(int i=0; i<n; i++){
      arr[i] = s.next();
    }

    int len = arr[0].length();

    for(int i=0; i<len; i++){
      boolean b = true;
      char c = arr[0].charAt(i);

      for(int j=0; j<n; j++){
        if(c != arr[j].charAt(i)){
          b = false;
        }
      }

      if(b){
        str = str.append(c);
      }
      else{
        str = str.append("?");
      }
    }
    System.out.println(str);
  }
}
