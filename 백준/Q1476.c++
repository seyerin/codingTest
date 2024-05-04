#include<stdio.h>
int e, s, m;

int main(){
	scanf("%d %d %d", &e, &s, &m);
	
	int te=1, tm=1, ts=1;
	int cnt = 1;
	
	while(1){
		if(e==te && m==tm && s==ts){
			break;
		}
		te++;
		ts++;
		tm++;
		cnt++;
		if(te == 16){
			te = 1;
		}
		if(ts == 29){
			ts = 1;
		}
		if(tm == 20){
			tm = 1;
		}
	}
	printf("%d", cnt);
}