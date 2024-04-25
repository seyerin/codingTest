import java.math.BigInteger;
import java.util.Scanner;


class Stack{
  int s[];
  int len;

  Stack(){
    s=null;
    len = 0;
  }

  void push(int data){
    int ss[] = new int[len+2];
    for(int i=0; i<ss.length; i++){
      ss[i] = s[i];
      System.out.println(ss[i]);
    }
  }
}


public class Main {
  public static void main(String[] args) {
    Stack st = new Stack();

    st.push(5);
  }
}
