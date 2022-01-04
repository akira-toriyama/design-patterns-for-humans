/**
 * 現実世界になぞらえるとこうです。
 *
 * 家造りでドアが必要になったときを考えてみましょう。家の中でドアが必要になるたびにいちいち作業着に着替えてドアを一からこしらえていたのでは煩雑になるばかりです。そんなことをするより、既製品のドアを工場（factory）から運んでくるのが普通でしょう。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * simple factoryパターンは、クライアントが必要とするインスタンスを単に生成するものです。このとき、インスタンス生成ロジックはクライアントから見えないようにうまく隠しておきます。
 */

/**
 * Wikipediaではこうです。
 *
 * オブジェクト指向プログラミング（OOP）におけるfactoryとは、他のオブジェクトを作成するオブジェクトのことである。元々factoryは、メソッド呼び出しからさまざまなプロトタイプやクラスのオブジェクトを返す関数やメソッド（newを前提）のことを指していた。
 */

/**
 * 使いみち
 *
 * オブジェクトを作成するときに、引数を渡す他にロジックも少々加えたいのであれば、そうしたコードをあちこちで繰り返し書くよりも、それ専用のfactoryを作ってそこに入れておく方が合理的です。
 */

type Door = {
  getWidth(): number;
  getHeight(): number;
};
class WoodenDoor implements Door {
  constructor(private _width: number, private _height: number) {}

  getWidth() {
    return this._width;
  }

  getHeight() {
    return this._height;
  }
}

const wDoor = new WoodenDoor(10, 20);
wDoor.getWidth();
wDoor.getHeight();
