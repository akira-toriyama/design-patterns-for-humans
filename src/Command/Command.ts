/**
 * 現実世界になぞらえるとこうです。
 *
 * 一般的な例として、レストランで食事を注文するときを考えてみます。あなた（Client）がウエイター（Invoker）に何か食事を持ってくるように指示する（Command）と、ウエイターはリクエストを料理長（Receiver）に丸投げします。料理長はどんな材料をどのように料理するかを知っています。
 * 別の例として、あなた（Client）がリモコン（Invoker）でテレビ（Receiver）の電源をオンにするところも考えられます。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * commandパターンは、操作をオブジェクト内にカプセル化できるようにします。このパターンの背後にある重要なアイデアは、クライアントをレシーバーから分離する手段を提供することです。
 */

/**
 * Wikipediaではこうです。
 *
 * オブジェクト指向プログラミングにおけるcommandパターンは振舞い系デザインパターンの一種であり、後で操作の実行やイベントのトリガに必要となるすべての情報をカプセル化するのにオブジェクトを用いる。この情報には、メソッド名、メソッドを持つオブジェクト、メソッドパラメータ用の値が含まれる。
 */

// レシーバ
class Bulb {
  turnOn() {
    console.log("電源が付きました。");
  }
  turnOff() {
    console.log("電源を消しました。");
  }
}

type Command = {
  execute(): void;
  undo(): void;
  redo(): void;
};

class TurnOn implements Command {
  constructor(private _bulb: Bulb) {}

  execute() {
    this._bulb.turnOn();
  }

  undo() {
    this._bulb.turnOff();
  }

  redo() {
    this.execute();
  }
}

class TurnOff implements Command {
  constructor(private _bulb: Bulb) {}

  execute() {
    this._bulb.turnOff();
  }

  undo() {
    this._bulb.turnOn();
  }

  redo() {
    this.execute();
  }
}

class RemoteControl {
  submit(command: Command) {
    command.execute();
  }
}

const bulb = new Bulb();

const turnOn = new TurnOn(bulb);
const turnOff = new TurnOn(bulb);

const remoCon = new RemoteControl();

remoCon.submit(turnOn);
remoCon.submit(turnOff);
