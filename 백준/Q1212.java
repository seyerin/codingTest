import java.util.Scanner;

public class Q1212 {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);

    String n = s.next();

    StringBuilder result = new StringBuilder();

    for(int i=0; i<n.length();i++){
      String temp = Integer.toBinaryString(n.charAt(i)-'0');

      if(temp.length() == 2 && i!=0){
        temp = "0"+temp;
      }
      else if(temp.length() ==1 && i!=0){
        temp = "00"+temp;
      }
      result.append(temp);
    }
    System.out.println(result);
  }
}
