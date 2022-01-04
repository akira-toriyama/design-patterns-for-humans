/**
 * 現実世界になぞらえるとこうです。
 *
 * パソコンの電源はどうやってオンにしますか？「電源ボタンを押す」ですよね。このように考えられるのも、パソコンが外部に対してシンプルなインターフェイスを提供しているという確信があるからこそです（内部的には電源投入でさまざまな処理が行われています）。複雑なサブシステムへのシンプルなインターフェイス、それがfacadeです（訳注: ファサードと読みます）。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * facadeパターンは、複雑なサブシステムへのシンプルなインターフェイスを提供します。
 */

/**
 * Wikipediaではこうです。
 *
 * facadeとは、大規模なコード（クラスライブラリなど）の本体への単純化されたインターフェイスを提供するオブジェクトである。
 */

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
