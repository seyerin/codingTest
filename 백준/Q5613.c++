#include<stdio.h>
#include<stdlib.h>

int main(){
	int n;
	int result;
	char op;
	scanf("%d\n", &result);
	
	while(1){
		scanf("%c", &op);
		
		if(op == '=') break;
		
		scanf("%d", &n);
		if(op == '+') result += n;
		else if(op == '-') result -= n;
		else if(op == '*') result *= n;
		else if(op == '/') result /= n;
	}
	printf("%d", result);
}