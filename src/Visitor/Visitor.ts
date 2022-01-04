type Animal = {
  accept(operation: AnimalOperation): void;
};

type AnimalOperation = {
  visitMonkey(monkey: Monkey): void;
  visitLion(lion: Lion): void;
};

class Monkey implements Animal {
  shout() {
    console.log("うきうき");
  }

  accept(operation: AnimalOperation) {
    operation.visitMonkey(this);
  }
}

class Lion implements Animal {
  roar() {
    console.log("ガオオオ");
  }

  accept(operation: AnimalOperation) {
    operation.visitLion(this);
  }
}

class Speak implements AnimalOperation {
  visitMonkey(monkey: Monkey) {
    monkey.shout();
  }

  visitLion(lion: Lion) {
    lion.roar();
  }
}

const monkey = new Monkey();
const lion = new Lion();

const speak = new Speak();

monkey.accept(speak);
lion.accept(speak);
