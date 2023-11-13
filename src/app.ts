type Pizza = {
    name: string,
    toppings: number,
};

const pizza: Pizza = {name: 'Blazing Inferno', toppings: 5};
const serialized = JSON.stringify(pizza);
function getNameFromJSON(obj: string) {
    return (JSON.parse(obj) as Pizza).toppings;
}

const pizzaName = getNameFromJSON(serialized);


