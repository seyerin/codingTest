import java.util.Date;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Date date = new Date();
    // String month = date.getMonth()+1 <10?"0"+date.getMonth()+1:date.getMonth()+1.
    System.out.println((date.getYear()+1900) +"-"+"0"+(date.getMonth()+1)+"-"+date.getDate());
  }
}
