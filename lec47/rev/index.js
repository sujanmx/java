// class human{
//  // properties
//  age;//public;that can used in this block as well as out of the block also
//  #wt=80;//private(by using #) in that case we just use this under this block ,only
//  ht; 
//  // behaviour
// constructor(newAge,newHeight,newWeight) {
//  this.age=newAge;
//  this.ht=newHeight;
//  this.#wt=newWeight;
// }
 
// walking(){
//     console.log('i am walking');
    
// }

// running(){
//     console.log('i am running')
// }

// get fetchWeight(){
//     return this.#wt;
// }

// set modifyWeight(val){
//     return this.#wt=val;
// }
//  }

//  let obj = new human (50,1900,200);
//  console.log(obj.age);
//  obj.walking();
//  console.log(obj.fetchWeight);
 

class chutiya{
    #fees;
    student;
    constructor(newFess,newStudent){
      newFess=this.#fees ;
      newStudent=this.student; 
    }

   get fetchFuckingFess ()  {
    return this.#fees;
   }
   set feesD(val){
    val=this.#fees;
   }
   admission (val){
    if(val==600000){
       console.log("your sons admision is done in our institue");
        
    }
    else{
        console.log('kamzoor pocket wala');
        
    }
   }
 

}
let sujan=new chutiya(2000)
sujan.admission();

