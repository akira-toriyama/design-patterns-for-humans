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
