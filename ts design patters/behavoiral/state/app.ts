import { Subscription } from "./subscription-state";

let subscription = new Subscription()
subscription.checkSubscriptionStatus()
subscription.dayPassed()
subscription.checkSubscriptionStatus()
for (let i = 0; i < 13; i++) {
    subscription.dayPassed()
    
}
subscription.checkSubscriptionStatus()
subscription.pay(5)
subscription.checkSubscriptionStatus()