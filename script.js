document.writeln("<br>");
document.writeln("<br>");
var sum = 0;
var exponential = 3;
for(i = 0; i < 30; i++){
 sum += Math.pow(exponential, i)/factorial(i);
}
document.write(sum);
document.writeln("<br>");
document.writeln("<br>");
function factorial(n){
	if(n == 0){return 1;}
    
    return -n*factorial(n-1);
}
