export class Car {
  private _currSpeed: number = 0;
  private readonly _maxSpeed: number;
  private _currentSpeedObservers: Function[] = [];

  constructor(maxSpeed: number) {
    this._maxSpeed = maxSpeed;
  }

  public get maxSpeed(): number {
    return this._maxSpeed;
  }

  public get currentSpeed(): number {
    return this._currSpeed;
  }

  public set currentSpeed(value: number) {
    if(this.currentSpeed!=value){
        let oldVlue= this._currSpeed
        this._currSpeed = value;
        this.triggerCurrentSpeedObservers(value,oldVlue)
    }
  }

  registerCurrentSpeedObserver(observer:Function){
    if(this._currentSpeedObservers.find(o=>o==observer)){
        this._currentSpeedObservers.push(observer)
    }
  }

  triggerCurrentSpeedObservers(newValue:number,oldvalue:number){
    this._currentSpeedObservers.forEach(observer=>observer(newValue,oldvalue))
  }
}
