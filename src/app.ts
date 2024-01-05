class Pizza {
    public toppings: string[] = [];
    constructor(private name: string) {}

    addTopping(toppings: string) {
        this.toppings.push(toppings);
    }
}


const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');
pizza.addTopping('cheese');

console.log(pizza);

