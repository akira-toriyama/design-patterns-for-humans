/**
 * 現実世界になぞらえるとこうです。
 *
 * 一国の大統領は、普通1人だけです。実際に表敬訪問する大統領は常に同一人物でなければなりません。大統領はsingletonなのです。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * あるクラスのオブジェクトが常に1つだけ作成されることを保証します。
 */

/**
 * Wikipediaではこうです。
 *
 * ソフトウェア・エンジニアリングにおけるsingletonパターンとは、クラスのインスタンスを常に1オブジェクトに制限するソフトウェアデザインパターンです。システム全体に渡る操作を1つのオブジェクトだけが扱う必要がある場合に役に立つ。
 */

class President {
  private static president: President;

  private constructor() {}

  static getInstance() {
    if (President.president) {
      return President.president;
    }
    President.president = new President();
    return President.president;
  }
}

const president = President.getInstance();
const president2 = President.getInstance();
