import { CalculateInterface } from "./interface";

export class Calculator implements CalculateInterface {
    private menu: Map<string, number>;
    private discountMenu: string[];
    constructor() {
        this.menu = new Map([
            ["Red", 50],
            ["Green", 40],
            ["Blue", 30],
            ["Yellow", 50],
            ["Pink", 80],
            ["Purple", 90],
            ["Orange", 120],
        ]);
        this.discountMenu = ["Orange", "Pink", "Green"];
    }

    execute(order: Map<string, number>, hasMemberCard: boolean) {
        let totalPrice = 0;
        order.forEach((quantity, key) => {
            if (this.menu.has(key)) {
                const itemPrice = this.getItemPrice(key)!
                let price = quantity * itemPrice
                if (this.discountMenu.includes(key) && quantity >= 2) {
                    price = this.calDiscountMenu(price);
                }
                totalPrice += price;
            }
            else {
                console.error(`not found '${key}' in the menu`);
            }
        });

        if (hasMemberCard) {
            totalPrice = this.calMemberCard(totalPrice);
        }
        return totalPrice;
    }
    getItemPrice(itemName: string) {
        return this.menu.get(itemName);
    }

    calMemberCard(price: number) {
        const discount = 0.9;
        return price * discount;
    }

    calDiscountMenu(price: number) {
        const discount = 0.95;
        return price * discount;
    }

}

const order = new Map([
    ["Red", 1],
    ["Green", 2],
]);
const hasMemberCard = true;
const calculator = new Calculator();

console.log('total price: ', calculator.execute(order, hasMemberCard));
