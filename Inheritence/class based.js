

class person{
    talk(){
        return "saying something";
    }
}
  

const me = new person();

console.log(me.talk());

console.log(me);
console.log(me.__proto__);

// add property to me. doesnt effect the class.
me.age = 30; 

// to add to person class we need to use prototype or __proto__.  (person.prototype === me.__proto__)
//Prototypes are the mechanism by which JavaScript objects inherit features from one another

person.prototype.age = 30;
person.prototype.talk = function(){
    return "say modded from the prototype";
}
console.log(me.talk());


// doesnt really work like this under the hood. this is a syntactic sugar. under the hood JS uses objects