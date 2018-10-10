function MyClass (id) {
     var privateField = "My secret";
     // Instance property
     this.id = id;
}

// Instance method
MyClass.prototype.myMethod = function () {};

var instance1 = new MyClass(1);
var instance2 = new MyClass(2);
console.log(instance1.id);
console.log(instance2.id)
console.log(instance1 instanceof MyClass);
console.log(instance1.__proto__);
console.log(instance1.hasOwnProperty("id"));
console.log(instance1.hasOwnProperty("myMethod"));