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
