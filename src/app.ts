interface SizesInterface {
    availableSizes: string[];
}

abstract class Sizes implements SizesInterface {
    constructor(protected sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes() {
        return this.sizes;
    }
}

interface PizzaInterface extends SizesInterface {
    readonly name: string;
    toppings: string[];
    updateSizes(sizes: string[]): void;
    addTopping(topping: string): void;
}
class Pizza extends Sizes implements PizzaInterface {
    public toppings: string[] = [];
    constructor(readonly name: string, sizes: string[]){
        super(sizes);
    }

    public updateSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    addTopping(toppings: string) {
        this.toppings.push(toppings);
    }
}

class Coupon {
    static allowed = ['Pepperoni', 'Blazing Inferno'];
    static create(percentage: number) {
        return `PIZZA_RESTAURANT_${percentage}`;
    }
}

const coupon = Coupon.create(25);

console.log(coupon);


const pizza = new Pizza('Pepperoni', ['small', 'medium']);
pizza.addTopping('pepperoni');
pizza.addTopping('cheese');
console.log(pizza.availableSizes);
pizza.updateSizes(['large']);
console.log(pizza.availableSizes);
console.log(pizza.name);

