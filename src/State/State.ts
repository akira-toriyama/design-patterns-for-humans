/**
 * 現実世界になぞらえるとこうです。
 *
 * 何らかの作図アプリを使っていて、ペイントブラシを選択したとします。すると、選択している色などに応じてブラシの振る舞いが変わります。赤を選べば赤で描けるようになり、青を選べば青で描けるようになる、といった具合です。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * stateパターンは、ステートの変更に応じてクラスの振る舞いを変更します。
 */

/**
 * Wikipediaではこうです。
 *
 * stateパターンは振る舞い系のソフトウェアデザインパターンであり、ステートマシン（state machine: 状態機械）をオブジェクト指向的に実装したものである。stateパターンを用いると、各ステートをstateパターンインターフェイスの派生クラスとして実装する形でステートマシンが実装され、パターンのスーパークラスで定義されたメソッドを呼ぶことでステートの遷移を実装する。
 * stateパターンはstrategyパターンとして解釈することもできる。このstrategyパターンは、そのパターンのインターフェイスに定義されたメソッド呼び出しを通じて現在のストラテジーを切り替えることができる。
 */

type WritingState = {
  write(words: string): void;
};

class UpperCase implements WritingState {
  write(words: string) {
    console.log(words.toUpperCase());
  }
}

class LowerCase implements WritingState {
  write(words: string) {
    console.log(words.toLowerCase());
  }
}

class Normal implements WritingState {
  write(words: string) {
    console.log(words);
  }
}

class TextEditor {
  constructor(private _state: WritingState) {}

  setState(state: WritingState) {
    this._state = state;
  }

  input(words: string) {
    this._state.write(words);
  }
}

const editor = new TextEditor(new Normal());
editor.input("aaa");

editor.setState(new UpperCase());
editor.input("bbb"); // Bbb

editor.setState(new LowerCase());
editor.input("Ccc"); // ccc
