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
