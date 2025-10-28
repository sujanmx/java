class human {
 age =13;
 #wt=102;
//  to make it private ;private means you can't acess it 
// out of the class . so we put the #
 ht=180;
 
 constructor(newAge,newHeight,newweight){
    this.age = newAge;
    this.ht=newHeight;
    this.#wt=newweight;

 }
// state and propertise


walking(){
    console.log("i am walking" ,this.#wt,);
    // to print the private data member 
    // we use the (this.age(name of that point you want ))keyword
}

running(){
    console.log("i am running");
}

get fetchWeight(){
    return this.#wt;
}
set modifyWeight(val){
    this.#wt=val;
}
}

// let obj =new human(); new human ar ar modha jata likhbo ota 
// constructer ar argument
let obj = new human(50,190,100);
console.log(obj.age);
// console.log(obj.wt);
console.log(obj.fetchWeight);
obj.modifyWeight=200;
// value ta first a jaba dia 
// get dia ftech kora return korcha
// set acha bola upgrade hoya 200 dhekaba 
console.log(obj.fetchWeight);

// chatgpt ka gaaayyan

// f you didn’t have a setter, your private property #wt could only be set inside the constructor.
// Later, if you wanted to change it, you couldn’t do:

// obj.#wt = 70;   // ❌ Error: private field


// So the only way to update weight would be to write a separate method like:

// updateWeight(newWeight) {
//    this.#wt = newWeight;
// }

// 🟢 With Setter

// You created:

// set modifyWeight(val) {
//   this.#wt = val;
// }


// Now you can do:

// obj.modifyWeight = 120;  // ✅ calls setter
// console.log(obj.fetchWeight); // 120


// It looks like a normal property assignment, but actually the setter function runs behind the scenes.

// 🔥 Why is this useful?

// Encapsulation → you keep #wt private but still allow controlled modification.

// Validation → you can add conditions inside setter:

// set modifyWeight(val) {
//   if (val > 0) {
//     this.#wt = val;
//   } else {
//     console.log("Weight must be positive!");
//   }
// }


// Cleaner syntax → Instead of calling obj.updateWeight(120), you can just do obj.modifyWeight = 120.

// Consistency → You make sure weight is always set correctly, never directly manipulated.

// ✅ In short:
// You used a setter because your weight (#wt) is private, and the setter gives you a safe, clean way to update it from outside the class.

// 👉 Bro, do you want me to rewrite your Human class with a validation rule inside setter (like: weight must be between 30–200), so you see the real benefit?

// // this is out of the scope so its show 
// lets start another game 

// class Fan {
//     #speed;

//  constructor(){
//     this.#speed=0;

//  }
//  get Speed(){
//     return this.#speed;
//  }
//  set speed (value){
//     if(value>=0 && value<=5){
//         this.#speed=value;
//     }
//     else{
//         console.log("aukat mea raho");
        
//     }
//  }
// }
// const fan = new Fan();
// fan.speed=3;
// fan.speed=9;

// console.log(fan.speed);

// // ut later you’re calling fan.speed = 3; (small fan).
// // 👉 That’s a mismatch. Use the same name (Fan or fan consistently).

// // You wrote a getter method as getSpeed() instead of a real getter (get speed()).
// // 👉 If you use getSpeed(), you must call it like fan.getSpeed().
// // 👉 If you use get speed(), you can just call fan.speed.

class circus{
#roomMeabanda;
constructor(){
this.#roomMeabanda=0;
}
get student(){
   return this.#roomMeabanda ;
}
set theNum(banda){
    if(banda>=5){
        this.#roomMeabanda=banda;
    }
else 
{
    console.log('school ki ma ka');
}
}

}

const nach=new circus();
nach.theNum=6;

console.log(nach.student);

// bro another learning;

class chatro{
    #age;
    #class;
    constructor (newAge,newClass){
       this.#class=newClass;
       this.#age=newAge;
        if (this.#class===this.#age){
        
            console.log(`welcome to techno, 
                we are haappy to say ho gaya apka beta ka carrier jhaand
                     8 lakh jama kar dijiya `);
            

        }
        else{console.log(`ara bhaishaab
             beehrampur mea aura hain 
            techno group kaa`);
        }
    }

    get fetchChat (){
        return  {age:this.#age,class:this.#class};
    }



    }

    const murgi = new chatro(21,20);
    
class fanK{
    fanSpeedd;
 constructor(chalao,){
    this.fanSpeedd=0;
 }
}
// bro another learning

function getSName(){
    return 'sujan vai jalwa';
} 

function sayName(lName='sujan',namee=getSName()){
     console.log(lName,'dheko dheko',namee);
    

}

sayName( );

 
