type BurgerOpt = {
  size: "S" | "M" | "L";
  pepperoni: boolean;
  lettuce: boolean;
  tomato: boolean;
};

class Burger {
  constructor(private _burgerOpt: BurgerOpt) {}
}

class BurgerBuilder {
  private _pepperoni: BurgerOpt["pepperoni"] = false;
  private _lettuce: BurgerOpt["lettuce"] = false;
  private _tomato: BurgerOpt["tomato"] = false;

  constructor(private _size: BurgerOpt["size"]) {}

  addPepperoni() {
    this._pepperoni = true;
    return this;
  }

  addLettuce() {
    this._lettuce = true;
    return this;
  }

  addTomato() {
    this._tomato = true;
    return this;
  }

  build() {
    return new Burger({
      size: this._size,
      pepperoni: this._pepperoni,
      lettuce: this._lettuce,
      tomato: this._tomato,
    });
  }
}

const burger = new BurgerBuilder("M")
  .addPepperoni()
  .addLettuce()
  .addTomato()
  .build();
