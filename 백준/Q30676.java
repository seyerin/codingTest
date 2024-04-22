import java.util.Scanner;

public class Q30676 {
  public static void main(String[] args) {
    Scanner sc  =new Scanner(System.in);
    int num = sc.nextInt();

    if(num >= 620 && num<=780){
      System.out.println("Red");
    }
    else if(num >= 590){
      System.out.println("Orange");
    }
    else if(num >= 570){
      System.out.println("Yellow");
    }
    else if(num >= 495){
      System.out.println("Green");
    }
    else if(num >= 450){
      System.out.println("Blue");
    }
    else if(num >= 425){
      System.out.println("Indigo");
    }
    else if(num >= 380){
      System.out.println("Violet");
    }
  }
}
