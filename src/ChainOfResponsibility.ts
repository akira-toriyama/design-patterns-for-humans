/**
 * 現実世界になぞらえるとこうです。
 *
 * たとえば、3種類の異なる支払い方法（A、B、C）が設定された銀行口座を持っているとします。それぞれの（最大）支払額は異なっており、Aは100米ドル、Bは300米ドル、Cは1000米ドルです。支払い設定では「A、次にB、次にC」のように選択されます。そして210米ドルで何かを購入したとします。Chain of Responsibilityパターンを使って、最初にAで支払い可能かどうかをチェックします。支払い可能であればそのまま購入を行い、チェイン（連鎖）は終了します。支払い可能でない場合、リクエストは次のBに進んで支払額をチェックします。支払い可能な場合はチェインは終了し、支払い可能でない場合はリクエストを次に進め、適切なハンドラが見つかるまでこれを繰り返します。ここでいうA、B、Cはチェインのリンクであり、この動作全体がChain of Responsibilityパターンになります。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * Chain of Responsibilityパターンは、オブジェクトのチェイン形成を支援します。リクエストはチェインの一方から他方へ、あるオブジェクトから別のオブジェクトへと進み、適切なハンドラが見つかるまでこれを繰り返します。
 */

/**
 * Wikipediaではこうです。
 *
 * オブジェクト指向設計におけるChain of Responsibilityパターンは、コマンドオブジェクトの提供元と、一連の処理オブジェクトで構成される。各処理オブジェクトには、オブジェクトが扱えるコマンドオブジェクトの種類を定義するロジックが含まれ、それ以外のコマンドオブジェクトは、チェイン上の次の処理オブジェクトに渡される。
 */

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
