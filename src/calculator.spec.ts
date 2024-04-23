import { Calculator } from './index';

describe('Calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('Case1: two Orange', () => {
        const order = new Map([
            ['Orange', 2]
        ]);
        const hasMemberCard = false
        const totalPrice = calculator.execute(order, hasMemberCard);
        expect(totalPrice).toBe(228);
    });

    test('Case2: two Pink', () => {
        const order = new Map([
            ['Pink', 2]
        ]);
        const hasMemberCard = false
        const totalPrice = calculator.execute(order, hasMemberCard);
        expect(totalPrice).toBe(152);
    });

    test('Case3: two Green', () => {
        const order = new Map([
            ['Green', 2]
        ]);
        const hasMemberCard = false
        const totalPrice = calculator.execute(order, hasMemberCard);
        expect(totalPrice).toBe(76);
    });

    test('Case4: not has memberCard & not discount (normal)', () => {
        const order = new Map([
            ['Red', 1],
            ['Green', 1]
        ]);
        const hasMemberCard = false
        const totalPrice = calculator.execute(order, hasMemberCard);
        expect(totalPrice).toBe(90);
    });

    test('Case5: has memberCard & not discount (member)', () => {
        const order = new Map([
            ['Red', 1],
            ['Green', 1]
        ]);
        const hasMemberCard = true
        const totalPrice = calculator.execute(order, hasMemberCard);
        expect(totalPrice).toBe(81);
    });

    test('Case6: has memberCard & discount', () => {
        const order = new Map([
            ['Purple', 1],
            ['Green', 2]
        ]);
        const hasMemberCard = true
        const totalPrice = calculator.execute(order, hasMemberCard);
        expect(totalPrice).toBe(149.4);
    });


    test('Case7: not found in the menu (error)', () => {
        const order = new Map([
            ['NotFound', 1]
        ]);
        const error = jest.spyOn(console, 'error').mockImplementation(() => { });
        const hasMemberCard = false
        const totalPrice = calculator.execute(order, hasMemberCard);
        expect(totalPrice).toBe(0);
        expect(error).toHaveBeenCalledWith(`not found 'NotFound' in the menu`);
        error.mockRestore();
    });
});
