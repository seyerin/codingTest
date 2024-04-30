#include<stdio.h>

int main(){
	int n;
	double num[10001];
	double max=0;

	scanf("%d", &n);
	
	for(int i=0; i<n; i++){
		scanf("%lf", &num[i]);
	}
	
	max = num[0];
	
	for(int i=1; i<n; i++){
		if(num[i] <= num[i]*num[i-1]){
			num[i] = num[i]*num[i-1];
		}
		printf("%lf\n", max);
		max = num[i] > max? num[i]:max;
	}
	
	printf("%.3lf", max);
}