/**
 * 現実世界になぞらえるとこうです。
 *
 * カードキー（アクセスカード）を使ってドアの鍵を開けたことはありますか？通常、こうしたドアの開け方はいくつもあるものです（カードキーで開ける、ボタンを押してセキュリティをバイパスするなど）。ドアの主要な機能は「ドアが開く」ことですが、いくつかの機能を追加するため、その機能の上にproxyが置かれています。この後のコード例でもう少し詳しく説明します。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * proxyパターンを使うと、あるクラスが別のクラスの機能を表現できるようになります。
 */

/**
 * Wikipediaではこうです。
 *
 * 最も一般的な意味でのproxyは、「別の何か」へのインターフェイスとして機能するクラスのことである。proxyは、舞台裏で実際にサービスを提供するオブジェクトにアクセスするために、クライアントから呼び出されるラッパーまたはエージェントオブジェクトである。proxyを使うと、実際のオブジェクトに単に転送したり、追加ロジックを提供したりできるようになる。proxyでは別の機能を提供することも可能である: たとえば、実際のオブジェクトでの操作がリソース集約的である場合にキャッシュしたり、実際のオブジェクト呼び出しでの操作の事前条件をチェックしたりできる。
 */

type Door = {
  open(): void;
  close(): void;
};

class LabDoor implements Door {
  open() {
    console.log("研究室のドアを開く");
  }

  close() {
    console.log("研究室のドアを閉じる");
  }
}

class Security {
  constructor(private door: Door) {}

  open(password) {
    if (this.authenticate(password)) {
      return this.door.open();
    }
    console.log("絶対ダメ！開けられません。");
  }

  authenticate($password) {
    return $password === "secret";
  }

  close() {
    this.door.close;
  }
}

const door = new Security(new LabDoor());
door.open("12345");
door.open("secret");
