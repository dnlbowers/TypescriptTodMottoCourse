class Pizza2 {
    name: string;
    toppings: string[] = [];
    constructor(name: string) {
        this.name = name;
    }

    addTopping(toppings: string) {
        this.toppings.push(toppings);
    }
}

function Pizza(name:string) {
    this.name = name;
    this.toppings = [];
}

Pizza.prototype.addTopping = function addTopping(toppings: string) {
    this.toppings.push(toppings);
};

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');

console.log(pizza);

