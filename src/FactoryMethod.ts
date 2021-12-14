/**
 * 現実世界になぞらえるとこうです。
 *
 * ある採用担当の管理職（hiring manager）を題材にして考えてみましょう。一般に、面接官（interviewer）があらゆる職種（開発、営業、経理など）向けの面接をひとりですべてこなすのは不可能です。欠員の生じた職種によっては、面接を別の人に委任（delegate）しなければならないでしょう。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * factory methodは、インスタンス化のロジックを子クラスに委譲する手段を提供するものです。
 */

/**
 * Wikipediaではこうです。
 *
 * クラスベースのプログラミングにおけるfactory methodパターンは、オブジェクト作成時に、作成するオブジェクトのクラスを厳密に指定しないで済むようにしたいという問題にfactory methodを使う。問題解決は、factory method呼び出しでオブジェクトを作成することで行われる。方法は2とおり: factory methodをインターフェイスで指定し実装は子クラスで行うか、ベース（親や先祖）クラスに実装し、必要なら派生クラスでオーバーライドする。コンストラクタの呼び出しでは行わない。
 *
 */

/**
 * 使いみち
 *
 * あるクラスに何らかの一般的な処理があるが、実行時にサブクラスを動的に決定する必要がある場合に便利です。言い換えると、サブクラスで必要になりそうなものをクライアントが正確には知らない（または知る必要がない）場合です。
 */

type Interviewer = {
  askQuestions(): void;
};

class Developer implements Interviewer {
  public askQuestions() {
    console.log("デザインパターンについて尋ねる");
  }
}

class CommunityExecutive implements Interviewer {
  public askQuestions() {
    console.log("コミュニティ育成について尋ねる");
  }
}

abstract class HiringManager {
  // Factory method
  protected abstract makeInterviewer(): Interviewer;

  public takeInterview() {
    this.makeInterviewer().askQuestions();
  }
}

class DevelopmentManager extends HiringManager {
  protected makeInterviewer(): Interviewer {
    return new Developer();
  }
}

class CommunityManager extends HiringManager {
  protected makeInterviewer(): Interviewer {
    return new CommunityExecutive();
  }
}

new DevelopmentManager().takeInterview();
new CommunityManager().takeInterview();
