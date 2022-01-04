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
