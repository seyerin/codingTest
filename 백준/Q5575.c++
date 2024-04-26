#include<stdio.h>

int main(){
	int sh[3], sm[3], ss[3], eh[3], em[3], es[3];
	
	for(int i=0; i<3; i++){
		scanf("%d %d %d %d %d %d", &sh[i], &sm[i], &ss[i], &eh[i], &em[i], &es[i]);
	}
	
	int sTotal, eTotal;
	
	for(int i=0; i<3; i++){
		sTotal = ss[i]+(sm[i]*60)+(sh[i]*3600);
		eTotal = es[i]+(em[i]*60)+(eh[i]*3600);
		
		int temp = eTotal - sTotal;
		int h = temp/3600;
		temp %= 3600;
		int m = temp/60;
		temp %= 60;
		printf("%d %d %d\n", h, m, temp);
	}
}