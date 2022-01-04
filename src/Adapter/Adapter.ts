type Lion = {
  roar(): void;
};

class AfricanLion implements Lion {
  roar() {
    console.log("ガォ");
  }
}

// これを追加する必要がある
class WildDog {
  public bark() {
    console.log("ワン");
  }
}

class WildDogAdapter implements Lion {
  constructor(private _dog: WildDog) {}
  public roar() {
    this._dog.bark();
  }
}

class Hunter {
  public hunt(lion: Lion) {}
}

const hunter = new Hunter();

hunter.hunt(new AfricanLion());
hunter.hunt(new WildDogAdapter(new WildDog()));
