#include<stdio.h>
#include<string.h>

int main(){
    int n;
	int arr[1000];
    
    scanf("%d", &n);
    
    for(int i=1; i<=n; i++){
		arr[i-1] = i;
	}
    
    int len = n;
	
	while(len!=0){
		printf("%d ", arr[0]);
		
		for(int i=0; i<len; i++){
			arr[i] = arr[i+1];
		}
		arr[len-1] = 0;
		len--;
		
		int temp = arr[0];
		for(int i=0; i<len; i++){
			arr[i] = arr[i+1];
		}
		arr[len-1] = temp;
	}
}