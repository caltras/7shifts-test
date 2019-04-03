// It was created to define an Int type
export type Int = number & { __int__: void };

// It was created to transform a number into Int
export const roundToInt = (num: number): Int => Math.round(num) as Int;

export class Calculator {

    public add(numbers: string= ""): Int {
        if (!numbers) {
            return 0 as Int;
        }
        const stack = numbers.split(",").filter( (v) => {
            return v !== "";
         }).map( (v) => roundToInt(Number(v.trim())) );

        const result = stack.reduce( (previous: Int, currentValue: Int) => {
            return roundToInt(previous + currentValue);
        } );

        return result;

    }
}
