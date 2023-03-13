import { PaidState } from "./paid-state";
import { ISubscriptionState, Subscription } from "./subscription-state";

export class TrialExpiredState implements ISubscriptionState {
  constructor(private _subscription: Subscription) {}
  pay(amount: number): void {
    this._subscription.state = new PaidState(this._subscription, amount);
  }

  checkExpiration(): void {
    throw new Error("trial expired.");
  }

  report(): string {
    return "trial expired";
  }
}
