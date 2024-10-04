/*
output 
input 
variables 



*/

console.log("vikas");
console.log("chaudhary");
console.log("dice"); console.log("academy");

//process.stdout.write("")

process.stdout.write("rohan");
process.stdout.write("raman");

/*
variables - container - bucket 

age=25





*/

let name="vikas";
let age=27;
let salary=10000;
let grade='B';
let address="Delhi";

console.log(name);
console.log(age);
console.log(salary);
console.log(grade);
console.log(address);


console.log("my name is ",name);

//template string 
console.log(`my name is ${name} and my age is ${age} , my salary is ${salary} and my address is ${address} and grades are ${grade}`);

// process.stdout.write(name);
// process.stdout.write(salary);

/*


operators 
1-Arithmatic operator
2-relational operator
3-logical operator 


1-Arithmatic operator
-+ - * / %






*/



console.log(10+20);
console.log(10-20);
console.log(5*10);
console.log(10/5);
console.log(11%5);

//floor function and ceil function 


console.log(Math.floor(11/5));
console.log(Math.ceil(11/5));


/*
relational operator 
< > <= >= == !=


ans -return - true/false



*/


console.log(10>5);
console.log(10<20);
console.log(10>30);
console.log(10==10);
console.log(10==20);
console.log(10!=20);

console.log(10>=12);
console.log(10<=12);
console.log(10>=10);
/*
10>10 false
10=10 true


*/

/*
10<12 true


*/

/*
10>12 false
10=12 false


*/




/*
logical operator 
 and or not 
 ans - true/ false

 and && - multiplication 
 or || - jodna 

 cs - non zero - -10,-2,9,"vikas" = truthy value - true
 zero =0 = false






*/

//and op
console.log("-----------------------------------");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);




/*
0 && 1 
0*1=0=false
1 && 0
1 * 0=0=zero = false


*/

/*
1 && 1
1 * 1 =1 = non zero value = true

*/



//or op


console.log(true || true); // 1+1=2=non zero = true
console.log(true || false); //1 + 0=1=true
console.log(false || true);//0+1=1=true
console.log(false || false);//0+0=0=false



//not 
console.log(!true);//false
console.log(!false);//true

console.log(!10);
console.log(!0);
console.log(!-2);
console.log(!"vikas");



































