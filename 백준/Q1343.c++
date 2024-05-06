#include<stdio.h>
#include<string.h>

int idx = 0, state = 1;
char board[51], result[51];

int paint(int cnt){
	if(cnt%2 == 0){
		int temp = idx;
		for(int i=temp; i<temp+cnt; i++){
			result[i] = 'A';
			idx++;
		}
		if(cnt%4 !=0){
			for(int i = idx; i>= idx-(cnt%4); i--){
				result[i] = 'B';
			}
		}
	}
	else{
		state = 0;
		return 0;
	}
}

int main(){
	int len, cnt;
	
	scanf("%s", &board);
	
	len = strlen(board);
	
	for(int i=0; i<len; i++){
		if(board[i] == '.'){
			paint(cnt);
			if(state == 0){
				printf("%d", -1);
				return 0;
			}
			result[idx++] = '.';
			cnt = -1;
		}
		cnt++;
	}
	paint(cnt);	
	printf("%s", result);
}