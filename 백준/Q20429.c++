#include <stdio.h>

int n, case1, case2;

int main(){
    scanf("%d", &n);
    case1  = n-(n*0.22);
	int temp = (n-n*0.8)*0.22;
	case2 = n-temp;
    printf("%d %d", case1, case2);
}