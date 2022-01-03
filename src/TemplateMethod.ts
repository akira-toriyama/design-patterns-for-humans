/**
 * 現実世界になぞらえるとこうです。
 *
 * 家を建設しているところを考えてみましょう。家造りはだいたい次のような手順になるでしょう。
 * – 家の基礎部分を作る
 * – 壁を作る
 * – 屋根を追加する
 * – 他の床を追加する
 * 家造りの手順は、まずこれ以外の順序にはならないはずです。屋根を作ってから壁を作る人はいないでしょう。それぞれの手順は、壁を木製にするか、ポリエステル製にするか、石造りにするか、などさまざまに変わります。
 *
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * template methodパターンは、特定のアルゴリズムの実行手順の骨格部分を定義します。手順は子クラスで実装します。
 */

/**
 * Wikipediaではこうです。
 *
 * ソフトウェアエンジニアリングにおけるtemplate methodパターンは振舞い系デザインパターンの一種であり、ある操作のアルゴリズムのプログラム的な骨格を定義し、手順の一部はサブクラスにする。template methodパターンを用いることで、アルゴリズムの特定の手順を、アルゴリズムの構造を変更せずに再定義できるようになる。
 */

abstract class Builder {
  workFlow() {
    this.test();
    this.build();
  }

  abstract test(): void;
  abstract build(): void;
}

class AndroidBuilder extends Builder {
  test() {
    console.log("アンドロイドのテストを実行");
  }

  build() {
    console.log("アンドロイドのビルドを実行");
  }
}

class IosBuilder extends Builder {
  test() {
    console.log("アイフォンのテストを実行");
  }

  build() {
    console.log("アイフォンのビルドを実行");
  }
}

const androidBuilder = new AndroidBuilder();
androidBuilder.build();

const iosBuilder = new IosBuilder();
iosBuilder.build();
