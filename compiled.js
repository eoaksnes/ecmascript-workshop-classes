'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Jedi = (function () {
  function Jedi() {
    _classCallCheck(this, Jedi);

    this.forceIsDark = false;
  }

  _createClass(Jedi, [{
    key: 'enableLightsaber',
    value: function enableLightsaber() {
      return "Enable enable lightsaber";
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.forceIsDark ? 'Join the dark side' : 'Fear is the path to the dark side';
    }
  }]);

  return Jedi;
})();

var Sith = (function (_Jedi) {
  _inherits(Sith, _Jedi);

  function Sith() {
    _classCallCheck(this, Sith);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sith).call(this));

    _this.forceIsDark = true;
    return _this;
  }

  return Sith;
})(Jedi);

console.log("\n Yoda");
var yoda = new Jedi();
console.log("toString():", yoda.toString());
console.log("printPrototypeChain():", printPrototypeChain(yoda));
console.log("enableLightsaber():", yoda.enableLightsaber());
console.log("Is enableLightsaber own property?", yoda.hasOwnProperty("enableLightsaber"));
console.log("Jedi.prototype.enableLightsaber():", Jedi.prototype.enableLightsaber());

console.log("\n Darth Vader");
var darth = new Sith();
console.log("toString():", darth.toString());
console.log("printPrototypeChain():", printPrototypeChain(darth));
console.log("isJedi:", darth instanceof Jedi);
console.log("isSith:", darth instanceof Sith);
console.log("Is forceIsDark own property?", darth.hasOwnProperty("forceIsDark"));
console.log("typeof Sith:", typeof Sith === 'undefined' ? 'undefined' : _typeof(Sith));

var MyClass = (function () {
  function MyClass(id) {
    _classCallCheck(this, MyClass);

    this.id = id;
  }

  _createClass(MyClass, [{
    key: 'myMethod',
    value: function myMethod() {
      return "My method!";
    }
  }], [{
    key: 'myStaticMethod',
    value: function myStaticMethod() {
      return "Static!";
    }
  }]);

  return MyClass;
})();

console.log("\n MyClass");
var instance = new MyClass(1);
console.log("isMyClass:", instance instanceof MyClass); // true
console.log("typeof MyClass:", typeof MyClass === 'undefined' ? 'undefined' : _typeof(MyClass)); // 'function' (old-school constructor function)
console.log(MyClass.myStaticMethod());
console.log(MyClass.prototype.myMethod());
console.log(instance.hasOwnProperty("myMethod"));
console.log("printPrototypeChain():", printPrototypeChain(instance));

var MySubClass = (function (_MyClass) {
  _inherits(MySubClass, _MyClass);

  function MySubClass(id) {
    _classCallCheck(this, MySubClass);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MySubClass).call(this, id));
  }

  return MySubClass;
})(MyClass);

console.log("\n MySubClass");
var subInstance = new MySubClass(2);
console.log("printPrototypeChain():", printPrototypeChain(subInstance));

/*
Util functions
*/
function printPrototypeChain(instance, asArray) {
  var chain = [];
  while (instance = Object.getPrototypeOf(instance)) {
    var name = instance.constructor.toString().match(/f.+n (.+)\(/);
    chain.push(name && name[1] ? name[1] : "(anonymous function expression)");
  }
  return asArray ? chain : chain.join(" -> ");
}
