/**
 * 家造りでドアが必要になったときを考えてみましょう。
 * 家の中でドアが必要になるたびにいちいち作業着に着替えてドアを一からこしらえていたのでは煩雑になるばかりです。
 * そんなことをするより、既製品のドアを工場（factory）から運んでくるのが普通でしょう。
 */

/**
 * simple factoryパターンは、クライアントが必要とするインスタンスを単に生成するものです。
 * このとき、インスタンス生成ロジックはクライアントから見えないようにうまく隠しておきます。
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
