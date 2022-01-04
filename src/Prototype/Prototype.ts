/**
 * 現実世界になぞらえるとこうです。
 *
 * クローン羊ドリーを覚えていますか？詳しい点はともかく、ここで重要なのは「クローン」です。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * prototypeパターンは、既存のオブジェクトを「クローン」することでオブジェクトを作成します。
 */

/**
 * Wikipediaではこうです。
 *
 * prototypeパターンとは、ソフトウェア開発における作成系デザインパターンであり、作成するオブジェクトの種類はプロトタイプとしてのインスタンスによって決定される。このインスタンスをクローンすることで新しいオブジェクトを生成する。
 */

/**
 * 使いみち
 * オブジェクトが既存オブジェクトに近いものであることが求められる場合や、オブジェクト作成のコストがクローンよりも高い場合に有用です。
 */

class Sheep {
  constructor(private _name: string, private _category = "オオツノヒツジ") {}
  setName(p: string) {
    this._name = p;
  }

  getName() {
    return this._name;
  }
}

const originSheep = new Sheep("ドリー");
originSheep.getName();

// JSでは正しく動作しない ディープコピーできないから...
const cloneSheep = originSheep;
cloneSheep.setName("ドリー2");
cloneSheep.getName();
