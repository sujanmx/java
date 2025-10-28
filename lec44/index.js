let obj = {
    name:"sujan",
    //name kau inverted coma dia lekha jaba ,kintu singel a na likhlao hoi 
    // so kintu  jodi key ar modha space thaka .then 
    // ""ta likh ta hoba like full name ata hoba na 
    // "full name"

    // "full name":"sujan mandal",
    age:25,
    height:"6ft 1 inch",
    greet:function(){
        console.log("hello suman ka salary bar gaya hain");
    }
}
for(let key in obj){
    console.log(key,"",obj[key]);
}
// console.log(obj);
// obj.greet();
// //what is sallow copy and deep coppy

// // array is nothing but collection of item and element

//   // creation of arrays
//   let arr=[1,2,3,4,5];
//   //array constructer
//   let brr = new Array('love',1,true);
//   brr.push('babar');
//   brr.pop();

//   brr.shift();
//   brr.unshift('sujan mandal');
//   brr.push(20);
//   brr.push(40);
//   brr.push(50);
// //   console.log(brr.slice(2,4));
// brr.splice(1,2,'suman');
//   console.log(brr);
// //   
// // console.log(brr[2]);expected output true

// // built in method 
// // push - insert at end 
// // pop -remove the last item
// // shift-remove the first element
// // unshift-add any thing in left most side
// // slice-
// // splice-content change -insert and replace at any position
// // Map
// // Filter
// // reduce 
// // short

// let arr= [10,20,30,11,44,21,51];
// let ansArray= arr.map((number)=>{
//    return number*number; 
// })

// console.log(ansArray);
// arr.map((number,index)=>{
//     console.log(number+1);
//     console.log(index);
// })

//filter 
// letEven=arr.filter((number=>{
//     if(number%2==0){
//         return true;


//     }
//     else{
//         return false;
//     }
// }))

// console.log(letEven);

// done by me//

// let arr =[1,2,'love','kunal','null'];

// let checkSt=arr.filter((wored)=>{
//     if (typeof(wored)==="string"){
//         return true;
//     }
//     else{
//         return false;
//     }

    
// })
// console.log(checkSt);

// arr.map((number,index)=>{
//     console.log(number+1);
//     console.log(index);
// })

// let xx =[20,12,261,55,54151,184185,514  ,"sujsn",'kujan,dujan'];
// let check=xx.map((number)=>{
//     return number*number;
// })
// console.log(check);
// xx.map((num,index)=>{
//     console.log(num-20);
//     console.log(index);
// })

// let cheqS=xx.filter((valu)=>{
//     if(typeof(valu)==="string"){
//         return true;
//     }
//     else{
//        return  false;
//     }
// })
// console.log(cheqS);
// xx.push('sujanhus');
// console.log(xx);

// let arr =[10,20,30,40];
// // let ans = arr.reduce((acc,curr)=>acc+curr ,0); suman sstyle
//  let ans = arr.reduce((acc,curr)=>{
//     return acc + curr;

//  },0);
// // love style
// console.log(ans);

// let a,b;
// let sortLogic =( a,b) =>
// {
//     if(a>b)
//         return -1;
//     else
//         return 1;
// };

// let mm = [5,8,6,2,1]
// mm.sort(sortLogic);
// console.log(mm);
// console.log(mm.indexOf(1));


// let arr = [10,20,30];

// arr.forEach((value,index)=>{
//     console.log("Number:",value,"index:",)
// })
// // by  the for each we can do opreation on the each of the element of the array

// for of loop

// let arr =[10,20,30,40];
// // for(let value of arr) for-of loop 
// for(let value of arr){
//     console.log(value);
// }

// let fullName = 'sujan';
// for(let val of fullName){
//     console.log(val);
// }


// // arrays with function -
// function getSum(arr){
//     let len = arr.length;
//     let sum = 0;
//     for(let index=0;index<len;index++){
//         sum = sum + arr [index];

//     }
//     return sum;
// }

// let totalSum= getSum(arr);
// console.log(totalSum);

// let sujan ={
//     myName:'sujan',
//     age:20,
//     class:"9",
// }
// console.log(sujan.age);

// let suman = [20,30,10,22];

// // suman.push("sujan");
// suman.pop();
// suman.splice(1,2,);
// suman.unshift(20);

// let sum = [20.30,40,50,60];

// let ansArra=sum.map((ele)=>{
//     return ele*ele;
// });

// console.log(ansArra);

// sum.map((number,index)=>{
//     console.log(number+1);
//     console.log(index);
// });

// let check=sum.filter((number)=>{
//     if (number%2==0){
//         return true;
//     }

//     else {
//         return false;
//     }
    
// });
// console.log(check);

// let dum =['sujan','suman',20,30,40,];
// let king = dum.filter((nim)=>{
//     if (typeof (nim)==='string')
//     {
//         return true;
//     }

//     else {
//         return false;
//     }


// });

// console.log(king);

// let mame = `sujan 
//   mandal 
//  kolkata `;
//  console.log(mame);
 

//   let op1 =`sujan`;
//   let op2 =`mandal`;

//  let getyname = `${op1} ${op2}`;
//  console.log(getyname);
 
//  let prop ='hello vai jaan balla balla saba saba ';
//   let last = prop.split(' ');
//   console.log(last);

  
  

// let aplha = ['sujan','suman','sannyasi'];
// let huh = aplha.map((num)=>{
//     return num.toUpperCase();
// });
// console.log(huh); 

// let beta = ['susomaa','sannyasi'];
// let sus =beta.map((num)=>{
//     return num.toLowerCase();

// })

// console.log(sus);




//  now we are going to multiply 

// let arr = [20,10,40,50];
// let srr= arr.reduce((acc,cur)=>{
//     return acc*cur;
// },1)
// console.log(srr);

// let ss=[100,200,300,400,];
// let rr = ss.find(numm=>numm>160) ;
// console.log(rr);

// // lets do this shit with string 

// let set = ['sujanm','sumanm','sannyasi'];
// let gett = set.find(namee=>{
//     return namee.endsWith("m");
    
// });
// console.log(gett);






