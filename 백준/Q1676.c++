#include<stdio.h>

int n;
int num= 5;
int result=0;
int main(){
	scanf("%d", &n);
	
	for(int i=0; i<3; i++){
		result += n/num;
		num*=5;
	}
	printf("%d", result);
	
}