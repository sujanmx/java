console.log("faang");
// let a =10;
// let b = 5 ;

// console.log(a*b);
// console.log(a/b);
// console.log(a**b); 

// let c = 10;
// let d =13;

// a=a+10;
// a+=10;
// value of both is same
// second one is shorthand type of 1st one

// console.log(a);

// console.log(a);

// now those code we written down those about comparison operator

//  console.log(10>=5);

//  console.log(5>=5);
//  console.log(50<=5);

// let sujan ="sujan";
// console.log(typeof(sujan));

// thats how i know that what kind of data type is 

// its denote === when we use strict equality operator , both the 
//data types and value are checked to determine equality and it returns
//

// let a ="5";
 
// let b =5;

// console.log(a==b);
// output=

// let a = 5;
// let b = 5;

// console.log(a===b);

// output is true

// == this sign didnt check data types just check values . this is looose equality

//The inequality (!=) operator checks whether its two operands are not equal, returning a Boolean result. Unlike the strict inequality operator, it attempts to convert and compare operands that are of different types.

console.log(1 != 1);
// Expected output: false

console.log("hello" != "hllo");
// Expected output: false

console.log("1" != 1);
// Expected output: false

console.log(0 != false);
// Expected output: false

// n JavaScript, != and !== are both inequality operators, but they differ in how they handle type coercion:

// != (Inequality Operator): This operator checks for inequality of values and performs type coercion before comparison. This means if the operands are of different data types, JavaScript will attempt to convert them to a common type before comparing their value

// !== (Strict Inequality Operator): This operator checks for strict inequality, meaning it compares both the value AND the data type of the operands without performing any type coercion. If the types differ, the comparison immediately returns true (indicating they are not strictly equal).

let age =25;
let status1 = (age>18) ? 'i can vote ' : 'i cant vote' ;
console.log(status1);

//logical operator

// And-sab true hain to true 
// koi bhe ek false hua tho false

// let ans = (true && true && true)

// let ans = (true && false && true)

// console.log(ans);


//or-//kpi e  ek bhe true hain tho true hain

// let ans =(false|| false || false)

//let ans =!(false);

//expected result- true//
//console.log(ans);

//let ans =!(false);

//console.log(ans);

//Not- sab agar false hain tho false hain


//falsy and truthy concept

//list of falsy is //
// undefined
// null
// o
// false
// NaN
// ''

// truthy is any thing which is not falsy


// let ans = false && false && true ;
// console.log(ans);

// console.log(false||7||11||18);
// expected output 0

// now it's all about bitwise operator

// like 

console.log(2&5);
// explenation have in wp notes/(binary multiplication of both)

console.log(2|8);
// output is (10) mianly adiiton of both of them

console.log(~(0));
// check wp notes

console.log(2^2);

// >>

console.log(10>>1);
// its give integer value only
// exp output 5

console.log(10<<1);
//exp 10*2^1

// NOW ITS ALL ABOUT CONDITIONAL OPERATOR //

let boyos =20;

if(boyos>21)
{
    console.log("able to eat horlicks");
}

else{
    console.log(" not able to eat");
}

// when we want to check multiple condition that time we use the else-if
//multiple else-if can  be used 

let number=5;
let ag =14;

if(number==1){
    console.log('a');
}

else if(number==2){
    console.log('b');
}
else if(number==3){
    console.log('c');
}
else if(number==4){
    console.log('d');
}
else if(number==5){
    if(ag>18)
    {
        console.log("amra korbo joy")
    }
    console.log('e');
}
else{
    console.log('f');


}


//swticch concept complete after some daay


//write a for loop 1245

for(let i=1;i<=5;i++)
{
    if(i==3)
        continue;

    else{
        console.log(i)
    }


}










