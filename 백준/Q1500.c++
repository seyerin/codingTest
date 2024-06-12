#include<stdio.h>

int main(){
	long long s, k;
	
	scanf("%lld %lld", &s, &k);
	
	long long tmp1, tmp2, ans=1;
	
	tmp1 = s/k;
	tmp2 = s%k;
	
	for(int i=0; i<k; i++){
		if(tmp2>0){
			ans*=(tmp1+1);
		}
		else{
			ans*=tmp1;
		}
		tmp2--;
	}
	
	printf("%lld", ans);
}