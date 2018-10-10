class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
	
	get myX() {
    	return this.x;
    }

    set myX(value) {
    	this.x = value;
    }

    toString() {
    	return `(${this.x}, ${this.y})`;
    }

    static myStatic() {

    }
}

let inst = new Point(1,4);
console.log(Point.myStatic());
console.log(typeof inst);
console.log(typeof Point);
console.log(inst.myX);
console.log(inst instanceof Point);
inst.myX = 100;
console.log(inst.myX);

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}

let cp = new ColorPoint(25, 8, 'green');
console.log(cp.toString());
console.log(cp instanceof Point);
console.log(cp instanceof ColorPoint);

class Animal {
  constructor(sound) { this._sound = sound; }
  get sound() { return this._sound; }
  say() { console.log('I ' + this._sound); }
}

class Dog extends Animal {
  constructor(sound) { super('woof'); }
}

class Cat extends Animal {
  constructor(sound) { super('meeeou'); }
}

var dog = new Dog();
dog.say();

var cat = new Cat();
cat.say();