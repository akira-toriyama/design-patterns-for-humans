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
