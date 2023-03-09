/*---- with-argument-and-with-return ----*/
/* var name="dharumaraj"
function example(data){
	return console.log(data);
}
example(name);
/*---- without-argument-and-with-return ----*
function example(){
	let data="dharumaraj";
	return console.log(data);
}
example();
/*---- with-argument-and-without-return ----*
function example(data){
	console.log(data);
}
example(name);
/*---- without-argument-and-without-return ----*
function example(){
	let data="dharumaraj";
	console.log(data);
}
example(); */
let usr1="dharumaraj";
let usr2="dharani";
function data(get){
	let count=0;
	for(let i=0;i<get.length;i++){
		if(get[i]==="a"||get[i]==="e"||get[i]==="i"||get[i]==="o"||get[i]==="u"){
			count++;
		}
	}
	return count;
}
let a=data(usr1);
let b=data(usr2);
console.log("a="+a,"b="+b);
function compare(a,b){
	if(a>b){
	console.log("a greater than b");
	}
	else if(a==b){
	console.log("both are same");
	}
	else{
	console.log("a less than b");
	}
}
compare(a,b);