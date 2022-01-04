/**
 * 現実世界になぞらえるとこうです。
 *
 * あなたは自動車のサービスショップを経営しており、さまざまなサービスを提供しているとします。このとき、料金をどのように計算しますか: サービスを1つ選んでは動的にサービスごとの価格を加算して最終的なコストを計算するでしょう。ここでいう各サービスがdecoratorです。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * decoratorパターンは、オブジェクトをdecoratorクラスのオブジェクトにラップすることで、実行時にオブジェクトの振舞いを動的に変更できるようにします。
 */

/**
 * Wikipediaではこうです。
 *
 * オブジェクト指向プログラミングにおけるdecoratorパターンとは、個別のオブジェクトに静的または動的に振舞いを追加できるようにするデザインパターンである。このとき、同じクラスの別のオブジェクトは影響を受けない。decoratorパターンは、独自の関心対象となっているクラス間で機能を分割できるので、「単一責任の原則（Single Responsibility Principle）」を尊守する場合に有用であることが多い。
 */

type Coffee = {
  getCost(): number;
  getDescription(): string;
};

class SimpleCoffee implements Coffee {
  getCost() {
    return 10;
  }
  getDescription() {
    return "シンプルなコーヒー";
  }
}

class MilkCoffee implements Coffee {
  constructor(private _coffee: Coffee) {}

  getCost() {
    return this._coffee.getCost() + 2;
  }

  getDescription() {
    return this._coffee.getDescription() + " & ミルク";
  }
}

const simpleCoffee = new SimpleCoffee();
simpleCoffee.getCost();
simpleCoffee.getDescription();

const milkCoffee = new MilkCoffee(new SimpleCoffee());
milkCoffee.getCost();
milkCoffee.getDescription();
