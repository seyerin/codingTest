#include<stdio.h>
#include<stdlib.h> // abs

int main(){
	int s, e, x, y;
	
	scanf("%d %d", &s, &e);
	
	x = abs(((s-1)/4) - ((e-1)/4));
	y = abs(((s-1)%4) - ((e-1)%4));
	
	printf("%d", x+y);
}