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
