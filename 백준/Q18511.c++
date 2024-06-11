#include<stdio.h>

int n, k, arr[3], ans=0;


void solve(int num){
	if(num > n){
		return;
	}
	ans = ans>num? ans:num;
	
	num*=10;
	
	for(int i=0; i<k; i++){
		solve(num+arr[i]);
	}
} 

int main(){
	
	scanf("%d %d", &n, &k);
	
	for(int i=0; i<k; i++){
		scanf("%d", &arr[i]);
	}
	
	solve(0);
	
	printf("%d", ans);
	
}