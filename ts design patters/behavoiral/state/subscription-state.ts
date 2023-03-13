import { TrialState } from "./trial-state";

export interface ISubscriptionState {
  pay(amount: number): void;
  checkExpiration(): void;
  report(): string;
}

export class Subscription{
    state:ISubscriptionState = new TrialState(this)

    pay(amount:number){
        this.state.pay(amount)
    }

    dayPassed(){
        this.state.checkExpiration()
    }

    checkSubscriptionStatus(){
        console.log(this.state.report())
    }
}

