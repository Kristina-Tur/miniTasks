import {sum} from './01';

test('sum should be correct', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action(действие)
    const result = sum(a, b);

    //expect result(ожидаемый результат)
    expect(result).toBe(3);
})