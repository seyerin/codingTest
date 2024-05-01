#include <stdio.h>
#include <string.h>

char input[1001];
int max=0, len;

int in(char *argv){
	FILE *in;
	in = fopen(argv, "rt");
	
	fscanf(in, "%s", &input);
	
	len = strlen(input);
	
	fclose(in);
}

int out(char *argv){
	FILE *out;
	out = fopen(argv, "wt");
	
	fprintf(out, "%d", max);	
	fclose(out);
}


int solve2(int start, int end){
	int sum1=0, sum2=0;
	for(int i = start; i <= start+((end+1)/2) - 1; i++){
		sum1 += input[i]-'0';
	}
	
	for(int i = start+((end+1)/2); i<= start+end; i++){
		sum2 += input[i]-'0';
	}
	
	if(sum1 == sum2){
		printf("%d %d %d\n", start, end, sum1);
		max = max > end+1? max:end+1;
	}
}

int solve(){
	for (int i = 0; i < len;	 i++) {
		for (int j = 1;j+i < len; j += 2) {
			solve2(i, j);
		}
	}
}

int main(int argc, char *argv[]){
	in(argv[1]);
	solve();
	out(argv[2]);
}