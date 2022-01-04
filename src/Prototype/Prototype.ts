class Sheep {
  constructor(private _name: string, private _category = "オオツノヒツジ") {}
  setName(p: string) {
    this._name = p;
  }

  getName() {
    return this._name;
  }
}

const originSheep = new Sheep("ドリー");
originSheep.getName();

// JSでは正しく動作しない ディープコピーできないから...
const cloneSheep = originSheep;
cloneSheep.setName("ドリー2");
cloneSheep.getName();
