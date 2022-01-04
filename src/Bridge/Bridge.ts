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
