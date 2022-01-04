type Door = {
  getDescription(): void;
};

class WoodenDoor implements Door {
  getDescription() {
    console.log("私は木のドアです");
  }
}

class IronDoor implements Door {
  getDescription() {
    console.log("私は鉄のドアです");
  }
}

type DoorFittingExpert = {
  getDescription(): void;
};

class Carpenter implements DoorFittingExpert {
  getDescription() {
    console.log("私が取り付けられるのは木のドアだけです");
  }
}

class Welder implements DoorFittingExpert {
  getDescription() {
    console.log("私が取り付けられるのは鉄のドアだけです");
  }
}

type DoorFactory = {
  makeDoor(): Door;
  makeFittingExpert(): DoorFittingExpert;
};

/**
 * 木製ドアのファクトリーは大工と木製ドアを返す
 */
class WoodenDoorFactory implements DoorFactory {
  makeDoor() {
    return new WoodenDoor();
  }
  makeFittingExpert() {
    return new Carpenter();
  }
}

/**
 * 鉄製ドアのファクトリーで鉄製ドアとそれに合う取付職人を取得
 */
class IronDoorFactory implements DoorFactory {
  makeDoor() {
    return new IronDoor();
  }
  makeFittingExpert() {
    return new Welder();
  }
}

const woodenFactory = new WoodenDoorFactory();
woodenFactory.makeDoor();
woodenFactory.makeFittingExpert();

const ironFactory = new IronDoorFactory();
ironFactory.makeDoor();
ironFactory.makeFittingExpert();
