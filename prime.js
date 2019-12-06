let lower = window.prompt("Enter lower bound of at least 2");
let a = parseInt(lower);
let upper = window.prompt("Enter upper bound");
let b = parseInt(upper);
let c=2;
let primes=[]
let non_primes=[]
let d=0;
while (a<=b) {
	while (((c<=(a/2))) && (a<=b)) {
        if (a%c!=0){
            c=c+1;
        }else {
						non_primes.push(a)
						c=2;
            a=a+1;
        }
    }
    if ((c>=(a/2)) && (a<=b)) {
        primes.push(a)
        d=d+1;
        c=2;
        a=a+1;
    }
}
alert("There are "+d+" prime numbers between "+lower+" and "+upper+". They are: "+primes)
