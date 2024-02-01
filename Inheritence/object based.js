function person(){
    // function talk(){ }
 }

// what js actually does is:

person.prototype.talk = function(){ 
    //function logic
}

// constructor function

function person1(){
    this.talk = function(){ }
    this.age = 30;
}
// now talk is directly in person not in person.proto. talk is a function. not a method. only belongs in this instance. not changed in prototype. person.age is undefined. only exists then object is created. 

class me extends person1{
    walk(){ return "walking";}
}

const vehicle = {
    start(){ return "start";}
}
// (1)
const car = Object.create(vehicle);
// (2)
const car1 = {}
Object.setPrototypeOf(car1,vehicle);


// As you can see above, JavaScript has object versions of the primitive data types String, Number, and Boolean. But there is no reason to create complex objects. Primitive values are much faster:

// Use string literals "" instead of new String().

// Use number literals 50 instead of new Number().

// Use boolean literals true / false instead of new Boolean().

// Use object literals {} instead of new Object().

// Use array literals [] instead of new Array().

// Use pattern literals /()/ instead of new RegExp().

// Use function expressions () {} instead of new Function().
