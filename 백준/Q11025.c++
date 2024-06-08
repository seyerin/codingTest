#include<stdio.h>

int main(){
	int n, k;
	
	scanf("%d %d", &n, &k);
	
	int arr[n];
	
	for(int i=0; i<n; i++){
		arr[i] = i+1;
	}
	
	int idx=0, cnt=0, cnt2=0, rs[n];
	
	while(cnt != n){
		if(idx == n){
			idx = 0;
		}
		if(arr[idx] != 0){
			cnt2++;
		}
		if(cnt2 == k){
			rs[cnt] = arr[idx];
			arr[idx] = 0;
			cnt++;
			cnt2=0;
		}
		idx++;
	}
	printf("%d", rs[n-1]);	
}