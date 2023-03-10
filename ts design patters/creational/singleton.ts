//share a state
//comunicate with clases
// unique

export class StatsTracker {
  buttonClicked = 0;
  shares = 0;
  twitterShares = 0;
  widgetVCiews = 0;

  constructor() {
    if (StatsTracker._instance) {
      throw new Error("cannot instantiate");
    }
    StatsTracker._instance = this;
  }

  private static _instance: StatsTracker = new StatsTracker();

  public static get instance(): StatsTracker {
    return StatsTracker._instance;
  }
}

let tracker = StatsTracker.instance;
tracker.buttonClicked = 6;

//can use instance from outside