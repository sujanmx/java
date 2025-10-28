console.log("faang");

// basic syntax 

// function functionname(ei khan a para meter)
//     {

//    }

// function sayMyname(){
//     console.log("sujan")
// }
// // we just  function not call it till now

// sayMyname();

// function PrintCounting(){
//     for(let i=1;i<=100;i++)
//     {
//         console.log(i);
//     }
// }

// PrintCounting();

// function printNumber(num){
//     //num is called parametter
//     console.log("print Number:",num);
// }

// printNumber(55);
// //  55 is an argument

// function getAverage(num1,num2){
//     let avg = (num1+num2)/2;
//     console.log("averagae ",avg);
// }

// getAverage(3,7);

//return function

// function getSum(a,b,c){
//     let sum = a+b+c;
//     return sum;
// }

// let ans= getSum(1,2,3);
// console.log("printing sum ",ans);

// function getMyname(firstName, lastName){
//     let fullName=firstName+" "+lastName;
//     return fullName;
//     // unreachable content
//     // asole a return  ar nicha ja likha hoi ota run hoi na/
//     let a =10;
//     let b =15;
//     let sum = a+b;
//     console.log(sum);

// }

// let yname = getMyname("sujan","mandal");
// console.log("your name ",yname);


// let squareNumber=function(num){
//     let ans =num**2;
//     return ans;
// }
// let ans = squareNumber(5);
// console.log(ans);

let kname = (firstName,secName)=>{
    let yourName= firstName + " "+secName ;
    return yourName;
}

console.log("yelo",kname("sujan","mandal"));

let countTable =(sft,sech)=>
{
    let unpai = sft+" "+sech;
    return unpai;
}
console.log (countTable("sujn","man"));

// function getSum(a,b,c){
//     let sum = a+b+c;
//     return sum ;
// }

// let moot =getSum(2,5,2);
// console.log(moot);

let getSum = function() {
    for(let i=1;i<=1;i++){
        console.log(i);

    }
}
console.log(getSum);
