// It was created to define an Int type
export type Int = number & { __int__: void };

// It was created to transform a number into Int
export const roundToInt = (num: number): Int => Math.round(num) as Int;

export class Calculator {

    public add(parameter: string= ""): Int {
        let delimiter = ",";
        if (!parameter) {
            return 0 as Int;
        }
        let numbers = parameter;
        if (parameter.indexOf("//") === 0) {
            delimiter = parameter.substr(2, parameter.indexOf("\n") - 2);
            numbers = parameter.substring(parameter.indexOf("\n"));
        }
        const stack = numbers.split(delimiter).filter( (v) => {
            return v !== "";
         }).map( (v) => roundToInt(Number(v.trim())) );

        const result = stack.reduce( (previous: Int, currentValue: Int) => {
            return roundToInt(previous + currentValue);
        } );

        return result;

    }
}
