"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this.count = 0;
        this.items = {};
    }
    Stack.prototype.push = function (element) {
        this.items[this.count] = element;
        this.count++;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        console.log('삭제전');
        console.log('this.count:', this.count);
        this.count--;
        console.log('빼기 이후 ');
        console.log('this.count:', this.count);
        var result = this.items[this.count];
        delete this.items[this.count];
        console.log('삭제후');
        console.log('this.count:', this.count);
        return result;
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.count === 0;
    };
    Stack.prototype.size = function () {
        return this.count;
    };
    Stack.prototype.clear = function () {
        /** while (!this.isEmpty()) {
         * this.pop();
        */
        this.items = {};
        this.count = 0;
    };
    Stack.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var objString = "".concat(this.items[0]);
        for (var i = 0; i < this.count; i++) {
            objString = "".concat(objString, ",").concat(this.items[i]);
        }
        return objString;
    };
    return Stack;
}());
exports["default"] = Stack;
var s = new Stack();
s.push(19);
s.push(20);
s.push(221);
s.push(2231);
s.push(3331);
console.log(s.size());
s.pop();
s.pop();
console.log(s.size());
