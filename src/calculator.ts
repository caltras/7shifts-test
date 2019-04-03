// It was created to define an Int type
export type Int = number & { __int__: void };

// It was created to transform a number into Int
export const roundToInt = (num: number): Int => Math.round(num) as Int;

export class Calculator {
    private changeDelimiter (numbers, d) {
        const delimiterToChange = "[##D##]";
        let start = numbers.indexOf(d);
        if (start === -1) {
            return numbers;
        }else{
            numbers = numbers.substring(0,start) + delimiterToChange +numbers.substring(start+d.length);
            return this.changeDelimiter(numbers,d);
        }
    }
    public add(parameter: string= ""): Int {
        let delimiter = [","];
        if (!parameter) {
            return 0 as Int;
        }
        let numbers = parameter;
        if (parameter.indexOf("//") === 0) {
            const paramDelimiter = parameter.substr(2, parameter.indexOf("\n") - 2);
            if (paramDelimiter !==","){
                delimiter = paramDelimiter.split(",");
            }
            numbers = parameter.substring(parameter.indexOf("\n"));
        }
        const negativesNumbers = [];
        const delimiterToChange = "[##D##]";
        delimiter.forEach( (d) => {
            numbers = this.changeDelimiter(numbers, d);
        });
        
        const stack = numbers.split(delimiterToChange).filter( (v) => {
            return v !== "";
         })
         .filter( (v) => {
             if ( Number(v) > 0 ) {
                if (Number(v) > 1000) {
                    return false;
                }
                return true;
             } else {
                negativesNumbers.push(v);
                return false;
             }
         });
        if (negativesNumbers.length > 0) {
            throw new Error("Negatives not allowed: " + negativesNumbers.join(","));
        }
        const result = stack
            .map( (v) => roundToInt(Number(v.trim())) )
            .reduce( (previous: Int, currentValue: Int) => {
                return roundToInt(previous + currentValue);
            } );

        return result;

    }
}
