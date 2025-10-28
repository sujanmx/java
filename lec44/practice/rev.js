// let person ={
//   Name: "sujan",
//   age:20,
//   country:"india",
  
// };
// console.log(person.Name);
// delete person.age;
// console.log(person);

const fruits =['apple','banana ,','orange','apple'];
console.log(fruits[0]);
console.log(fruits[2]);

// bro now we acess the last element \




fruits.push('kiwi');
console.log(fruits[fruits.length-1]);

//when we want too add some in first//

fruits.unshift('sujan');
console.log(fruits);

//array.splice(startIndex, deleteCount, item1, item2, ...)//

const sun=['apple','orange'];
sun.splice(2,0,'banana');
console.log(sun);

const moon =[-1,0,-20,45,3,74,-5,6];

// const positiveSum =moon.filter((moon)=>(moon>0));
// console.log(positiveSum);
const positiveSum = moon.filter(function(moon){
  return moon>0;
});
console.log(positiveSum);

// const products =[
//   {
//    id:1,
//    name:"sabun" ,
//    price:10,
//   },
//   {
//    id:2,
//    name:"sabun" ,
//    price:20,
//   },
//   {id:3,
//    name:"sabun" ,
//    price:30,},
// ];

// const valuePlusProducts =products.filter((products)=>(products.price>15));
// console.log(valuePlusProducts);

let sunRise = [60,50,40,90];
// sunRise.splice(2,1,"sujan");
sunRise.pop();
sunRise.shift();
console.log(sunRise);

//function

// basic syntx

// function functionName(parametter){

// }

// function sayMyname (){
//   console.log("lovebabar");
// }//till this we just write the defination 

// sayMyname();//it's call function call

//print counting till 1 to 100 ;

function counting (){
  for(i=1;i<=100;i++){
    console.log(i);

  }

};

counting();

function printNumber(num)//in this case num is the perameter
{
  console.log("printing number:",num);
}

printNumber(5);//in this case 5  is the argument;that we pass by the function

function getAverage(fstNum,secNum){
  let avg=(fstNum+secNum)/2;
  console.log("average",avg);
  
}

getAverage(20,40);

// return





 function getsum(a,b,c){
  let sum = a+b+c;
  return sum;
 }

//  ai khan a dhek ekhan a amra  jodi o ba function call kori tao ans pabo na 
//karon jeta return korba seta store korta hoba tooo 

let ans =getsum(1,2,3);

console.log(ans);

function naam (name) {
  return `hello ,${name}!`
}


// console.logz


