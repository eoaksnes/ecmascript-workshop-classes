function Point(x,y) {
    this.x = x;
    this.y = y;

    this.sayHi = function(){
        console.log('hello');
    };
}

Point.distance = function (a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    return Math.sqrt(dx*dx + dy*dy);
};

Point.prototype.toString = function () {
    return this.x + ' ' + this.y;
};


var ColorPoint = function (x, y, color) {
    Point.call(this, x, y);
    this.color = color;
};

ColorPoint.prototype = Object.create(Point.prototype);
ColorPoint.prototype.constructor = ColorPoint;

ColorPoint.prototype.getColor = function () {
    return this.color;
};

var point = new Point(1,2);
point.sayHi();
console.log(Point.prototype);
console.log(point.__proto__);

var colorPoint = new ColorPoint(5,5,'blue');
console.log(colorPoint.toString());
console.log(colorPoint.getColor());
colorPoint.sayHi();

var anotherColorPoint = new ColorPoint(10,10,'red');
console.log(anotherColorPoint.toString());
console.log(anotherColorPoint.getColor());
console.log(Point.distance(colorPoint, anotherColorPoint));