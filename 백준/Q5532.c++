#include<stdio.h>

int l, a, b, c, d;

int solve(){
	int max = a%c == 0? a/c: a/c+1 ;
	int num2 = b%d ==0? b/d: b/d+1;
	max = max > num2 ? max:num2;
	printf("%d", l-max);	
}

int main(){
	scanf("%d %d %d %d %d", &l, &a, &b, &c, &d);
	
	solve();	
} 