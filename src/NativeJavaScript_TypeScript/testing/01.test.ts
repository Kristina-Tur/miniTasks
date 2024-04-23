import {sum} from './01';

let a: number;
let b: number;

beforeEach(() => {
    //data
    a = 1;
    b = 1;
})
test('sum should be correct', () => {


    //action(действие)
    const result = sum(a, b);

    //expect result(ожидаемый результат)
    expect(result).toBe(0);
})