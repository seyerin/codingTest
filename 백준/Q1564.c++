#include<stdio.h>

int main(){
	int n;
	scanf("%d", &n);
	int pac = 1;
	int pow = 1;
	for(int i=1; i<=n/5; i++){
		pac *= i;
		pow *= 4;
	}
	printf("%d", pac*pow);
	
}