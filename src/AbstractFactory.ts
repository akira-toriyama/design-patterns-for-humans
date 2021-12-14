/**
 * 現実世界になぞらえるとこうです。
 *
 * simple factoryのドアのたとえをもう少し広げて考えてみましょう。木製ドアは木製ドア専門店、鉄製ドアは鉄専門店、塩ビドアはそれ専門の店から入手したいとします。かつ、ドアの種類ごとに違う職人が必要になるとします（木製なら大工、鉄製なら溶接工、など）。すなわち、現在取り付けられているドアの種類に応じて、木製ドアには大工を、鉄製ドアなら溶接工を、といった具合に職人を頼む必要があります。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * 複数のファクトリーに対する1つのファクトリー（a factory of factories）は、個別のファクトリーを束ねてグループ化しますが、関連する（または依存する）ファクトリーの具体的なクラスを指定しません。
 */

/**
 * Wikipediaではこうです。
 *
 * abstract factoryパターンは、テーマの共通な個別のファクトリーのグループをカプセル化する手段を提供する。このとき、ファクトリーの具体的なクラスを指定しない。
 */

/**
 * 使いみち
 *
 * 依存関係が双方向で、作成のロジックがある程度以上複雑な場合。
 */

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
