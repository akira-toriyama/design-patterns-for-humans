type Coffee = {
  getCost(): number;
  getDescription(): string;
};

class SimpleCoffee implements Coffee {
  getCost() {
    return 10;
  }
  getDescription() {
    return "シンプルなコーヒー";
  }
}

class MilkCoffee implements Coffee {
  constructor(private _coffee: Coffee) {}

  getCost() {
    return this._coffee.getCost() + 2;
  }

  getDescription() {
    return this._coffee.getDescription() + " & ミルク";
  }
}

const simpleCoffee = new SimpleCoffee();
simpleCoffee.getCost();
simpleCoffee.getDescription();

const milkCoffee = new MilkCoffee(new SimpleCoffee());
milkCoffee.getCost();
milkCoffee.getDescription();
