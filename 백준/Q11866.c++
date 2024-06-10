#include<stdio.h>
#include <queue> 
using namespace std;
queue<int> q;

int main(){
	int k, n;
	
	scanf("%d %d", &n, &k);
	
	if(n == 1){
		printf("<1>");
		return 0;
	}
	
	for(int i=1; i<=n; i++){
		q.push(i);
	}
	printf("<");
	while(q.size() != 0){
		for(int i=1; i<k; i++){
			q.push(q.front());
			q.pop();
		}
		printf("%d", q.front());
		if(q.size() != 1){
			printf(", ");
		}
		q.pop();
	}
	printf(">");
}