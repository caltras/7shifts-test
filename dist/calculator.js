"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundToInt = (num) => Math.round(num);
class Calculator {
    constructor() {
    }
    add(numbers = "") {
        if (!numbers)
            return 0;
        let stack = numbers.split(",").map((v) => exports.roundToInt(Number(v.trim())));
        let result = stack.reduce((previous, currentValue) => {
            return exports.roundToInt(previous + currentValue);
        });
        return result;
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.js.map