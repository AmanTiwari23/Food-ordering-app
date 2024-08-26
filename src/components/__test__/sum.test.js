
import { Sum } from "../Sum";

test("test case for the sum", ()=>{
    const result = Sum(1,5);

    expect(result).toBe(6);
})