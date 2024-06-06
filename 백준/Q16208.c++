#include<stdio.h>
#include<stdlib.h>


int static compare (const void* first, const void* second)
{
    if (*(int*)first > *(int*)second)
        return 1;
    else if (*(int*)first < *(int*)second)
        return -1;
    else
        return 0;
}


int main(){
	long long n, rs=0;
	scanf("%lld", &n);
	
	long long arr[n], sum=0;
	
	for(int i=0; i<n; i++){
		scanf("%lld", &arr[i]);
		sum+= arr[i];
	}

	qsort(arr, n, sizeof(long long), compare);
	
	for(int i=0; i<n; i++){
		sum -= arr[i];
		rs += sum*arr[i];
	}
	printf("%lld", rs);
}
