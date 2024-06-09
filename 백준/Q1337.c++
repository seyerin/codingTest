#include<stdio.h>
#include<stdlib.h>

int compare(const void* a, const void* b) {
	return(*(int*)a - *(int*)b);
}

int main(){
	int n;
	scanf("%d", &n);
	int arr[n];
	for(int i=0; i<n; i++){
		scanf("%d", &arr[i]);
	}
	
	qsort(arr, n, sizeof(int), compare);
	int cnt=1, tmp;
	
	for(int i=0; i<n; i++){
		tmp = 1;
		for(int j=i+1; j<i+5; j++){
			if(arr[j]-arr[i] <5 && arr[j]-arr[i] >0){
				tmp++;
			}
		}
		cnt = cnt>tmp? cnt:tmp;
	} 
	
	printf("%d", 5-cnt);
	
}