/**
 * 現実世界になぞらえるとこうです。
 *
 * 電卓を例にします。電卓をoriginator（発起人）とし、電卓で何か計算すると、最後の計算がメモリ上に保存されます。これがmemento（形見、遺品）に相当します。何か操作ボタンを押すと保存された計算を後で呼び戻すことができます。この操作ボタンはcaretaker（世話人）に相当します。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * mementoパターンは、オブジェクトの現在のステート（状態）をキャプチャし、後でスムーズに取り出せる形式で保存します。
 */

/**
 * Wikipediaではこうです。
 *
 * mementoパターンはソフトウェアにおけるデザインパターンであり、オブジェクトのステートを以前のステートに戻す（ロールバックによるundo）能力を提供する。
 */

class EditorMemento {
  constructor(private _content: string) {}

  get content() {
    return this._content;
  }
}

class Editor {
  private _content: string = "";

  write(words: string) {
    this._content = `${this._content}${words}`;
  }

  get content() {
    return this._content;
  }

  save() {
    return new EditorMemento(this._content);
  }

  restore(memento: EditorMemento) {
    this._content = memento.content;
  }
}

const editor = new Editor();

// 文字入力
editor.write("111");
editor.write("222");

const saved = editor.save();

editor.write("333");

editor.content; // 111222333

editor.restore(saved);

editor.content; // 111222
