class Jedi {
	constructor() {
		this.forceIsDark = false;
	}

	enableLightsaber() {
		return "Enable enable lightsaber";
	}

	toString() {
		return this.forceIsDark ?
		'Join the dark side' : 'Fear is the path to the dark side';
	}
}

class Sith extends Jedi {
	constructor() {
		super();
		this.forceIsDark = true;
	}
}

console.log("\n Yoda");
let yoda = new Jedi();
console.log("toString():", yoda.toString());
console.log("printPrototypeChain():", printPrototypeChain(yoda));
console.log("enableLightsaber():", yoda.enableLightsaber());
console.log("Is enableLightsaber own property?",yoda.hasOwnProperty("enableLightsaber"));
console.log("Jedi.prototype.enableLightsaber():", Jedi.prototype.enableLightsaber());



console.log("\n Darth Vader");
let darth = new Sith();
console.log("toString():", darth.toString());
console.log("printPrototypeChain():", printPrototypeChain(darth));
console.log("isJedi:", darth instanceof Jedi);
console.log("isSith:", darth instanceof Sith);
console.log("Is forceIsDark own property?", darth.hasOwnProperty("forceIsDark"));
console.log("typeof Sith:", typeof Sith);



class MyClass {
    constructor (id) {
        this.id = id;
    }
    myMethod () { return "My method!" }
    static myStaticMethod() { return "Static!" }
}

console.log("\n MyClass");
let instance = new MyClass(1);
console.log("isMyClass:", instance instanceof MyClass); // true
console.log("typeof MyClass:", typeof MyClass); // 'function' (old-school constructor function)
console.log(MyClass.myStaticMethod());
console.log(MyClass.prototype.myMethod());
console.log(instance.hasOwnProperty("myMethod"));
console.log("printPrototypeChain():", printPrototypeChain(instance));

class MySubClass extends MyClass {
    constructor (id) {
        super(id)
    }
}

console.log("\n MySubClass");
let subInstance = new MySubClass(2);
console.log("printPrototypeChain():", printPrototypeChain(subInstance));

/*
Util functions
*/
function printPrototypeChain(instance, asArray) {
    var chain = []
    while (instance = Object.getPrototypeOf(instance)) {
        var name = instance.constructor.toString().match(/f.+n (.+)\(/)
        chain.push(name && name[1]? name[1] : "(anonymous function expression)")
    }
    return asArray? chain : chain.join(" -> ")
}