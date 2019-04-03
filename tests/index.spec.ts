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
    describe('Part 2 - Breaking Line', ()=>{
        it('Add "1\\n,2,3" expected 6', ()=>{
            expect(calc.add("1\n,2,3")).toBe(6 as Int);
        });
        it('Add "1,2\\n,4" expected 7', ()=>{
            expect(calc.add("1,2\n,4")).toBe(7 as Int);
        });
    });
    describe('Part 3 - Custom Delimiter', ()=>{
        it('Add "//,\\n1\\n,2,3" expected 6', ()=>{
            expect(calc.add("//,\n1\n,2,3")).toBe(6 as Int);
        });
        it('Add "// \\n1 2\\n 4" expected 7: Space as delimiter', ()=>{
            expect(calc.add("1,2\n,4")).toBe(7 as Int);
        });
        it('Add "//$\\n1$2$3" expected 6: $ as delimiter', ()=>{
            expect(calc.add("//$\n1$2$3")).toBe(6 as Int);
        });
        it('Add "//@\\n2@3@8" expected 13: @ as delimiter', ()=>{
            expect(calc.add("//@\n2@3@8")).toBe(13 as Int);
        });
        it('Add "//\\\\\\n2\\\\3\\\\8" expected 13: \\\\ as delimiter', ()=>{
            expect(calc.add("//\\\n2\\3\\8")).toBe(13 as Int);
        });
        it('Add "////\\n2//3//8" expected 13: // as delimiter', ()=>{
            expect(calc.add("////\n2//3//8")).toBe(13 as Int);
        });
    });
    describe('Part 4 - Negatives not allowed', ()=>{
        it('Add "-1,2,3" expected Exception', ()=>{
            try{
                calc.add("-1,2,3");
                fail();
            }catch(e){
                expect(e.message).toBe('Negatives not allowed: -1');
            }
        });
        it('Add "-1,2,-4,-5" expected Exception', ()=>{
            try{
                calc.add("-1,2,-4,-5");
            }catch(e){
                expect(e.message).toBe('Negatives not allowed: -1,-4,-5');
            }
        });
    });
    describe('Bonus', ()=>{
        it('Add "-1,2,3,2000" expected Exception', ()=>{
            try{
                calc.add("-1,2,3");
                fail();
            }catch(e){
                expect(e.message).toBe('Negatives not allowed: -1');
            }
        });
        describe("Bonus 1", () =>{
            it('Add "1,2,3,5,1001" expected 11: Ignoring number larger than 1000', ()=>{
                expect(calc.add("1,2,3,5,1001")).toBe(11 as Int);
            });
            it('Add "1,2,3,5,1000" expected 1011: Ignoring number larger than 1000', ()=>{
                expect(calc.add("1,2,3,5,1000")).toBe(1011 as Int);
            });
        });
        describe("Bonus 2", ()=>{
            it('Add "//***\\n1***2***3": Arbitrary length to Delimiter', ()=>{
                expect(calc.add("//***\n1***2***3")).toBe(6 as Int);
            });
        });
        describe("Bonus 3", ()=>{
            it('Add "//$,@\n1$2@3": Multiples delimiters', ()=>{
                expect(calc.add("//$,@\n1$2@3")).toBe(6 as Int);
            });
        });
        describe("Bonus 4", ()=>{
            it('Add "//***,$,@\\n1***2***3$5$6@7": Combine Bonus 2 and Bonus 3', ()=>{
                expect(calc.add("//***,$,@\n1***2***3$5$6@7***6")).toBe(30 as Int);
            });
        });
    });
})