#include<stdio.h>
#include<string.h>

char prime[102];

int divider(char *p, int n){ //소수의 가장 작은 수 찾는 함수 
	int len = strlen(p);
	int rest=0, share=0, idx=0;
	
	for(int i=0; i<len; i++){
		rest = rest*10 + (p[i]-'0');
		share = rest/n;
		rest %= n;
		
		if(idx != 0 || share != 0){
			prime[idx] = share+'0';
			idx++;
		}
	}
	prime[idx] = '\0';
	return rest;
}



int main(){
	char p[1000001];
	int k,p1, state=1;
	
	scanf("%s %d", &p, &k);
	
	for(int i=2; i<=k; i++){
		if(divider(p, i) == 0){
			p1 = i;
			state = 0;
			break;
		}
	}
	
	if(state){
		printf("GOOD");
	}
	else{
		printf("BAD %d %s", p1, prime);
	}
	
}