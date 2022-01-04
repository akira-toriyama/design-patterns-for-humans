/**
 * 現実世界になぞらえるとこうです。
 *
 * ソートで考えてみましょう。バブルソートを実装したものの、データが増えるに連れてバブルソートが遅くなってきたので、クイックソートを実装して対応しました。しかしクイックソートのアルゴリズムは大規模データセットでは良好ですが、データセットが小さいと逆にものすごく遅くなります。この問題に対応するためにstrategyパターンを実装し、小規模データセットにはバブルソート、大規模データセットにはクイックソートがそれぞれ用いられるようにしました。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * strategyパターンを使うことで、状況に応じてアルゴリズムや戦略を切り替えられます。
 */

/**
 * Wikipediaではこうです。
 *
 * コンピュータ・プログラミングにおけるstrategyパターン（policyパターンとも呼ばれる）は、アルゴリズムの振舞いを実行時に指定できるようにするための振舞い系ソフトウェアデザインパターンである。
 */

type SortStrategy = {
  sort(dataset: []): [];
};

class BubbleSortStrategy implements SortStrategy {
  sort(dataset: []) {
    // バブルソートを実行
    return dataset;
  }
}

class QuickSortStrategy implements SortStrategy {
  sort(dataset: []) {
    // クイックソートを実行
    return dataset;
  }
}

class Sorter {
  constructor(private _sorter: SortStrategy) {}

  sort(dataset: []) {
    return this._sorter.sort(dataset);
  }
}

const main = (dataset: []) => {
  if (dataset.length < 10) {
    // 件数に応じて適切なソート処理を実行
    const sorter = new Sorter(new BubbleSortStrategy());
    return sorter.sort(dataset);
  }

  const sorter = new Sorter(new QuickSortStrategy());
  return sorter.sort(dataset);
};
