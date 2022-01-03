/**
 * 現実世界になぞらえるとこうです。
 *
 * 一般的な例として、スマホで誰かに話しかけるところを考えてみます。あなたと通話相手の間にはネットワークプロバイダが介在し、会話の内容は通話相手に直接送信されずにプロバイダを経由します。このネットワークプロバイダがmediator（仲介者）です。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * mediatorパターンは、mediatorと呼ばれる第三者的なオブジェクトを追加することで、colleague（同僚）と呼ばれる2つのオブジェクト同士のやりとりを制御します。このパターンでは、クラスは相手のクラスの実装を知る必要がないため、クラス間の相互通信の結合を弱める働きがあります。
 */

/**
 * Wikipediaではこうです。
 *
 * ソフトウェアエンジニアリングにおけるmediatorパターンは、オブジェクト同士のやりとりの設定をカプセル化するオブジェクトを定義するものである。同パターンは振舞い系デザインパターンと呼ばれるが、これはプログラム実行中の動作を改変する方法が由来となっている。
 */

type ChatRoomMediator = {
  showMsg(user: User, msg: string): void;
};

class ChatRoom implements ChatRoomMediator {
  showMsg(user: User, msg: string) {
    console.log(`${user.name}: ${msg}`);
  }
}

class User {
  constructor(private _name: string, private _chatMediator: ChatRoomMediator) {}

  get name() {
    return this._name;
  }

  send(msg: string) {
    this._chatMediator.showMsg(this, msg);
  }
}

const mediator = new ChatRoom();
const john = new User("John", mediator);
const jane = new User("Jane", mediator);

john.send("こんにちは!");
jane.send("ひさしぶり");
