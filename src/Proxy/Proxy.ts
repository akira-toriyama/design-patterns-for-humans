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
