class President {
  private static president: President;

  private constructor() {}

  static getInstance() {
    if (President.president) {
      return President.president;
    }
    President.president = new President();
    return President.president;
  }
}

const president = President.getInstance();
const president2 = President.getInstance();
