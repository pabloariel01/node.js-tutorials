import { IoCContainer, IoCContainerDecorated, Register } from "./ioc-container";

interface IDepA {
  doA(): void;
}
interface IDepB {
  doB(): void;
}
interface IDepC {
  doC(): void;
}

@Register("IDepA",[])
class ConcreteA implements IDepA {
  doA(): void {
    console.log("A");
  }
}

@Register("IDepB",[])
class ConcreteB implements IDepB {
  doB(): void {
    console.log("B");
  }
}

@Register("IDepC",["IDepA","IDepB"])
class ConcreteC implements IDepC {
  constructor(private _concreteA: IDepA, private _concreteB: IDepB) {}

  doC(): void {
    this._concreteA.doA();
    this._concreteB.doB();
    console.log("done");
  }
}

let container = IoCContainerDecorated.instance;

// container.register("IDepA", [], ConcreteA);
// container.register("IDepB", [], ConcreteB);
// container.register("IDepC", ["IDepA", "IDepB"], ConcreteC);

let a = container.resolve<IDepA>("IDepA"); //resolve needs to be generic to return a concreteA
a.doA();

let b = container.resolve<IDepB>("IDepB");
b.doB();

let c = container.resolve<IDepC>("IDepC");
c.doC();
console.log("done")
