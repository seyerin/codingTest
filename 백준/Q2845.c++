#include <stdio.h>

	int l, p, nums[5];
	
	
int solve(){
	int people = l*p;
	
	for(int i=0; i<5; i++){
		nums[i] -= people;
		printf("%d ", nums[i]);
	}
}
	
int main(){
	
	scanf("%d %d", &l, &p);
	
	scanf("%d %d %d %d %d", &nums[0], &nums[1], &nums[2], &nums[3], &nums[4]);
	solve();
}