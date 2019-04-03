import { Calculator, Int } from "../src/calculator";

describe('7Shifts Test', ()=>{
    const calc: Calculator = new Calculator();
    describe('Part 1', ()=>{
        it('Add with empty parameters', ()=>{
            expect(calc.add()).toBe(0 as Int);
        });
        it('Add "1,2,5" expected 8', ()=>{
            expect(calc.add("1,2,5")).toBe(8 as Int);
        });
        it('Add "1 , 2 , 5 " expected 8: Parameters with space', ()=>{
            expect(calc.add("1 , 2 , 5")).toBe(8 as Int);
        });
        it('Add "1,2," expected 3: missing a number', ()=>{
            expect(calc.add("1,2,")).toBe(3 as Int);
        });
        it('Add "1" expected 1', ()=>{
            expect(calc.add("1")).toBe(1 as Int);
        });
    });
    describe('Part 2', ()=>{
        it('Add "1\\n,2,3" expected 6', ()=>{
            expect(calc.add("1\n,2,3")).toBe(6 as Int);
        });
        it('Add "1,2\\n,4" expected 7', ()=>{
            expect(calc.add("1,2\n,4")).toBe(7 as Int);
        });
    });
})