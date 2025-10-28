let i=5;
while(i>=1){
   
    if (i==4){
        i--;
 continue;
    } 
       
     else {
         console.log(i);
         i--;

     }
       
    
    
}

// from this line all we talk about string

let firstName = "love love";
let lastName ='babar';
console.log(firstName);

// another type where we can also define string back ticks

let thirdName =`sujan
mandal`;
console.log(thirdName);

// to understand check the outputs to learn the case

let fourthName = new String("love babar");
console.log(fourthName)
;

let op1 = 'ENGgISH';
let op2 = 'SONG';
let ans = op1+op2;
console.log(ans);

// let finalAnswer = 'op1'+ `op2`;
// console.log(finalAnswer);
// output is only op1op2

let finalAnswer = `${op1}${op2}`;
// output english song
console.log(op2.length);
//thats how we calculate the numbers of string

// console.log(op1.toUpperCase());
// console.log(op1.toLowerCase());

let str ="babar";
// console.log(str.substring(3));
// another style 
console.log(str.substring(2,4));

//ee";//let sentence ="hello ji kaise ho sar
// let word = sentence.split(' ');
// console.log(word);

// akta string ar vetor black slash use korla " " coma use kora jai

let sentence ="hello ji \"kaise \"ho sara ";
// let word = sentence.split(' \');this is not possible 

// jamon space dia split kora chi tamon kintu black slash dia possibile na  
// black slash dia korta korta gelA  aro akta back slash lagba
// but 
let ss = "hello ji \\kaise \\h\\ sara ";
// console.log(ss.split('\\'));
let aplphabet = ss.split('\\');

// now this is possible
console.log(aplphabet);
console.log(aplphabet.join('+'));

for(let i=1;i<=5;i++){
    console.log('sujanm');
    
};

// reverse counting 

for(let i=5;i>0;i--){
    console.log(i)
};

for(let i=1;i=>0;i++){
    if(i==4)
    break;
else
    console.log(i);
    
};

let getYour = (x,y)=>{
let Mam= x*y;
return Mam;
}

console.log(getYour(10,10));
srr =[10,20,30];
let yourSquare =srr.map((number)=>{
   let sSqua=number*number
    return sSqua;
})
console.log(yourSquare);

// bro lets do some chutiyapa

let jj =[200,2000,300,400];

let sum = jj.reduce((acc,cur)=>{
    let kaka = acc + cur ;
    return kaka;
})

console.log(sum);

// let for - of 
let arr  = [10,20,30,40];
for(let value of arr){
    console.log(value);
}

