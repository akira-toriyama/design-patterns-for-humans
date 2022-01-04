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
