/**
 * 現実世界になぞらえるとこうです。
 *
 * ドバイに行く旅行者で考えてみます。ドバイに入国するまでは、入国手段（ビザなど）だけが必要です。ドバイに到着した後は、いちいち許可を得たり面倒な手続きを行ったりせずに、ドバイ国内のどんな場所でも自由に移動できるようになります。旅行者にドバイ国内の場所を知らせると、旅行者はそこに行けるようになるものとします。visitorパターンはちょうどこのようなものです。訪問する場所をひとたび追加すると、面倒な手続きなしにいつでもそこを訪問できるようになります。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * visitorパターンは、オブジェクト改変を必要とせずに他の操作を追加します。
 */

/**
 * Wikipediaではこうです。
 *
 * オブジェクト指向プログラミングやソフトウェアエンジニアリングにおけるvisitorデザインパターンは、visitorが操作するオブジェクトの構造からアルゴリズムを切り離す方法である。アルゴリズムの分離による直接の結果として、既存のオブジェクトに新しい操作を加えられるようになり、かつオブジェクトの構造を変更する必要が生じない。visitorパターンは、開放/閉鎖の原則に沿うための方法のひとつである。
 */

type Animal = {
  accept(operation: AnimalOperation): void;
};

type AnimalOperation = {
  visitMonkey(monkey: Monkey): void;
  visitLion(lion: Lion): void;
};

class Monkey implements Animal {
  shout() {
    console.log("うきうき");
  }

  accept(operation: AnimalOperation) {
    operation.visitMonkey(this);
  }
}

class Lion implements Animal {
  roar() {
    console.log("ガオオオ");
  }

  accept(operation: AnimalOperation) {
    operation.visitLion(this);
  }
}

class Speak implements AnimalOperation {
  visitMonkey(monkey: Monkey) {
    monkey.shout();
  }

  visitLion(lion: Lion) {
    lion.roar();
  }
}

const monkey = new Monkey();
const lion = new Lion();

const speak = new Speak();

monkey.accept(speak);
lion.accept(speak);
