import {mult, splitIntoWords, sum} from './01';

let a: number;
let b: number;

beforeEach(() => {

})
test('sum should be correct', () => {
    //data
    a = 1;
    b = 5;
    //action(действие)
    const result = sum(a, b);

    //expect result(ожидаемый результат)
    expect(result).toBe(6);
})

test('mult should be correct', () => {
    //data
    a = 1;
    b = 5;
    //action(действие)
    const result = mult(a, b);

    //expect result(ожидаемый результат)
    expect(result).toBe(5);
})
test('split into words should be correct', () => {
    //data
    const sent = 'Hello words!'
    //action(действие)
    const result = splitIntoWords(sent);

    //expect result(ожидаемый результат)
    expect(result.length).toBe(2);
    expect(result[0]).toBe('hello');
    expect(result[1]).toBe('words');
})