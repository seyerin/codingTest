#include<stdio.h>

int main(){
	int l, n;
	scanf("%d", &l);
	
	int arr[l];
	
	for(int i=0; i<l; i++){
		scanf("%d", &arr[i]);
		
	}
	scanf("%d", &n);
	
	int idx1, idx2;
	
	for(int i=0; i<l; i++){
		if(arr[i]< n){
			int tmp, max=0;
			if(i != l-1){
				tmp = arr[i+1]-arr[i];
				if(tmp > max){
					idx1=i;
					idx2=i+1;
					max=tmp;
				}
			}
		}
	}
	int s=arr[idx1]+1, e=arr[idx2]-1; 
	
	int result = (n-s)*(e-n+1) + (e-n);
	printf("%d", result);
}