/**
 * 現実世界になぞらえるとこうです。
 *
 * あなたはWebサイトをひとつ所有しているとします。Webサイトにはさまざまなページがあり、ユーザーがテーマを自由に変更できるようにすることを求められているとします。どのようにすればよいでしょうか: テーマの数だけページのコピーを作成しますか？それとも独立したテーマを作成し、ユーザー設定に応じてテーマを読み込ませますか？bridgeパターンを使って、後者のような手法を実現できます。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * bridgeパターンは、継承ではなくcompositionを優先するためのものです。ある階層の実装の詳細は、別の階層にある別のオブジェクトにプッシュされます。
 */

/**
 * Wikipediaではこうです。
 *
 * bridgeパターンとは、ソフトウェアエンジニアリングにおいて「実装からその抽象（abstraction）を切り離して、両者を別々に変更できるようにする」ために使うデザインパターンである。
 */

type Theme = {
  getThemeColor(): string;
};

class DarkTheme implements Theme {
  getThemeColor() {
    return "Dark Black";
  }
}

class AquaTheme implements Theme {
  getThemeColor() {
    return "Light blue";
  }
}

abstract class WebPage {
  constructor(protected theme: Theme) {}
  abstract getPageInfo(): {
    name: string;
    themeColor: string;
  };
}

class About extends WebPage {
  constructor(protected theme: Theme) {
    super(theme);
  }

  getPageInfo() {
    return {
      name: "Aboutページ",
      themeColor: this.theme.getThemeColor(),
    };
  }
}

class Item extends WebPage {
  constructor(protected theme: Theme) {
    super(theme);
  }

  getPageInfo() {
    return {
      name: "Itemページ",
      themeColor: this.theme.getThemeColor(),
    };
  }
}

const about = new About(new DarkTheme());
about.getPageInfo();
