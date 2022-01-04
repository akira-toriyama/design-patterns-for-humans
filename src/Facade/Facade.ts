class Computer {
  getElectricShock() {
    console.log("ビリビリ！");
  }

  makeSound() {
    console.log("ピッ！ポッ！");
  }

  showLoadingScreen() {
    console.log("読み込み中...");
  }

  bam() {
    console.log("準備ができました！");
  }

  closeEverything() {
    console.log("ビーッ！ビーッ！ビビビビビ！");
  }

  sooth() {
    console.log("（シーン）");
  }

  pullCurrent() {
    console.log("プシューッ!");
  }
}

class ComputerFacade {
  private _computer: Computer;

  constructor() {
    this._computer = new Computer();
  }

  turnOn() {
    this._computer.getElectricShock();
    this._computer.makeSound();
    this._computer.showLoadingScreen();
    this._computer.bam();
  }

  turnOff() {
    this._computer.closeEverything();
    this._computer.pullCurrent();
    this._computer.sooth();
  }
}

const computer = new ComputerFacade();
computer.turnOn();
computer.turnOff();
