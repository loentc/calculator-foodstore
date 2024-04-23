import { Calculator } from './index';

describe('Calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('Test calMemberCard function', () => {
        const order = new Map([
            ['Red', 1],
            ['Green', 2]
        ]);
        const hasMemberCard = false
        const price = calculator.execute(order, hasMemberCard)
        const totalPrice = calculator.calMemberCard(price);
        expect(totalPrice).toBe(113.4);
    });


    test('Test calDiscountMenu function', () => {
        const order = new Map([
            ['Pink', 1],
            ['Orange', 1]
        ]);
        const hasMemberCard = false
        const price = calculator.execute(order, hasMemberCard)
        const totalPrice = calculator.calDiscountMenu(price);
        expect(totalPrice).toBe(190);
    });

    test('Test getItemPrice function', () => {
        const itemName = 'Pink'
        const itemPrice = calculator.getItemPrice(itemName)
        expect(itemPrice).toBe(80);
    });

});
