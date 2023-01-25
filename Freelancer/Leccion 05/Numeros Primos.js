var count = 0;
for(var i = 1; i < 100; i++){
	for(var j = 1; j <= i; j++){
		if(i % j == 0){
			count++;
		}
	}
	if(count == 2){
		console.log(i);
	}
	count = 0;
}
