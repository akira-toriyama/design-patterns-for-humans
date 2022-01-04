/**
 * 現実世界になぞらえるとこうです。
 *
 * メモリーカードに画像がいくつか保存されており、これを自分のパソコンにコピーしたいとします。メモリカードをパソコンに挿入して画像を転送するには、自分のパソコンのポートと互換性のある何らかのアダプタが必要です。このカードリーダーが、adapterです。
 * 別の例: 電源プラグにはプラグのピンが3本のものと2本のものがあります。3本タイプのプラグは2本プラグ用のコンセントには挿し込めませんので、挿入するには2本プラグ用コンセントと互換性のある変換アダプタが必要になります。これもadapterです。
 * さらに別の例: 通訳者は、ある人物の話す言葉を翻訳して、別の人物に伝えます。この通訳者もadapterです。
 *
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * adapterパターンとは、互換性のない別のオブジェクトをadapterでラップして、別のクラスとの互換性を得るためのものです。
 */

/**
 * Wikipediaではこうです。
 *
 * ソフトウェアエンジニアリングにおけるadapterパターンとは、既存のクラスのインターフェイスを別のインターフェイスとして利用できるようにするものである。adapterパターンは、ソースコードを改変せずに既存のクラスが別のクラスと協調して動くようにさせる目的で頻繁に利用される。
 */

type Lion = {
  roar(): void;
};

class AfricanLion implements Lion {
  roar() {
    console.log("ガォ");
  }
}

// これを追加する必要がある
class WildDog {
  public bark() {
    console.log("ワン");
  }
}

class WildDogAdapter implements Lion {
  constructor(private _dog: WildDog) {}
  public roar() {
    this._dog.bark();
  }
}

class Hunter {
  public hunt(lion: Lion) {}
}

const hunter = new Hunter();

hunter.hunt(new AfricanLion());
hunter.hunt(new WildDogAdapter(new WildDog()));
