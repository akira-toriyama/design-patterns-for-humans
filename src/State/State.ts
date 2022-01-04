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
