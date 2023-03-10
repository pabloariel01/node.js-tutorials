import { Car } from "./car";

async function sleep(duration): Promise<any> {
  return new Promise((res, rej) => {
    setTimeout(res, duration);
  });
}

async function testObservers(): Promise<any> {
  let car = new Car(200);
  car.registerCurrentSpeedObserver(reportCurrentSpeed);
  car.registerCurrentSpeedObserver(checkSpeedLimit);
  while (car.currentSpeed <= car.maxSpeed) {
    car.currentSpeed = +10;
    sleep(1000);
  }
}

function reportCurrentSpeed(newValue: number, oldValue: number) {
  console.log(`car running at ${newValue}`);
}

function checkSpeedLimit(newValue: number, oldValue: number) {
  const speedLimit = 100;
  if (newValue > speedLimit) {
    console.log("over spped limit");
  }
}

testObservers();
