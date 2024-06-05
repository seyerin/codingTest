#include<stdio.h>

int main(){
	int n, k, idx=0, cnt=0;
	
	scanf("%d %d", &n, &k);
	
	int arr[n], result[n];
	
	for(int i=1; i<=n; i++){
		arr[i-1] = i;
	}
	
	int cnt2 = 0, tmp=0;
	while(cnt!=n){
		if(idx == n){
			idx = 0;
		}
		if(arr[idx] != 0){
			cnt2++;
		}
		if(cnt2 == k){
			result[cnt] = arr[idx];
			arr[idx] = 0;
			cnt2=0;
			cnt++;
		}
		idx++;
	}
		

	printf("<");
	for(int i=0; i<n-1; i++){
		printf("%d, ", result[i]);
	}
	printf("%d>", result[n-1]);
}