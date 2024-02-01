// the prototype itself is an object so the ptotorype will have its own prototype. PROTOTYPE CHAIN. the chain end when we reach a prototype that has null fot its own property.

// The standard way to access an object's prototype is the Object.getPrototypeOf() method.

// non standard way to access an object's prototype is __proto__

const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function () {
  console.log("something else!");
};

myDate.getYear(); // 'something else!'

// myDate.getYear is called shadowing the property