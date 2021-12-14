/**
 * 現実世界になぞらえるとこうです。
 *
 * ハーディーズ（Hardee’s: 米国のレストランチェーン）で何か注文するところを考えます。たとえば「ビッグハーディ」を頼めば、店の人は何も聞かずに持ってきます。これだとsimple factoryの例になります。しかしたとえば、少し凝ったサブウェイ風のが欲しい場合、ハンバーガーの作り方にはいろいろなオプションが考えられます（どんなバンズにするか、ソースの種類は何がいいか、チーズはどれにするか、など）。このような場合にはbuilderパターンが助けに来てくれるでしょう。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * コンストラクタを汚さないようにしながら、さまざまなフレーバー（flavor: 味や香り、転じて追加的な要素）を持つオブジェクトを作成できるようになります。オブジェクトにさまざまなフレーバーがある場合や、オブジェクトの作成に関連する手順が多い場合に有用です。
 */

/**
 * Wikipediaではこうです。
 *
 * builderパターンとは、オブジェクト作成における「telescoping constructor」アンチパターンの解決を目指す意図を持つソフトウェアデザインパターンである。
 */

/**
 * 使いみち
 *
 * オブジェクトにいくつものフレーバーがあり、telescoping constructorを避ける場合に有用です。factoryパターンとの大きな違いは、factoryパターンは作成が1ステップでできる場合に使うのに対し、builderパターンは作成に複数のステップを踏む場合に使う点です。
 */

type BurgerOpt = {
  size: "S" | "M" | "L";
  pepperoni: boolean;
  lettuce: boolean;
  tomato: boolean;
};

class Burger {
  constructor(private _burgerOpt: BurgerOpt) {}
}

class BurgerBuilder {
  private _pepperoni: BurgerOpt["pepperoni"] = false;
  private _lettuce: BurgerOpt["lettuce"] = false;
  private _tomato: BurgerOpt["tomato"] = false;

  constructor(private _size: BurgerOpt["size"]) {}

  addPepperoni() {
    this._pepperoni = true;
    return this;
  }

  addLettuce() {
    this._lettuce = true;
    return this;
  }

  addTomato() {
    this._tomato = true;
    return this;
  }

  build() {
    return new Burger({
      size: this._size,
      pepperoni: this._pepperoni,
      lettuce: this._lettuce,
      tomato: this._tomato,
    });
  }
}

const burger = new BurgerBuilder("M")
  .addPepperoni()
  .addLettuce()
  .addTomato()
  .build();
