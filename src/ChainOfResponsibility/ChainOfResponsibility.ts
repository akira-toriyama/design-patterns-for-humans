class Account {
  protected successor: Account;
  protected balance: number;

  setNext(account: Account) {
    this.successor = account;
  }

  canPay(amount: number) {
    return this.balance >= amount;
  }

  pay(amountToPay: number) {
    if (this.canPay(amountToPay)) {
      console.log(`${amountToPay}ドル支払われました。`);
      return;
    }

    if (this.successor) {
      console.log(`支払いできません。次の支払い方法に進みます。`);
      this.successor.pay(amountToPay);
      return;
    }

    console.log("残高が十分なアカウントがありません");
  }
}

class Bank extends Account {
  constructor(balance: number) {
    super();
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance: number) {
    super();
    this.balance = balance;
  }
}

class Bitcoin extends Account {
  constructor(balance: number) {
    super();
    this.balance = balance;
  }
}

// アカウントにお金を準備
const bank = new Bank(100);
const paypal = new Paypal(300);
const bitcoin = new Bitcoin(500);

// 支払い順位を設定
bank.setNext(paypal);
paypal.setNext(bitcoin);

// 支払い
bank.pay(400);
