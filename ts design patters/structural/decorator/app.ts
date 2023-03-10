//base class
class Computer {
  boot(): void {
    console.log("booting");
  }
  shutdown(): void {
    console.log("shutting down");
  }
  print(): void {
    console.log("cannot print, no printer");
  }
  render(): void {
    console.log("no gpu");
  }
}

//allows to add features
class ComputerComponentDecorator extends Computer {
  constructor(private _computer: Computer) {
    super();
  }

  boot() {
    return this._computer.boot();
  }
  shutdown(): void {
    return this._computer.shutdown();
  }
  print(): void {
    return this._computer.print();
  }
  render(): void {
    return this._computer.render();
  }
}

// concrete class
class ServerComputer extends Computer {
  boot(): void {
    console.log("booting server");
  }
  shutdown(): void {
    console.log("shutting down server");
  }
}

class ComputerWithprinterDecorator extends ComputerComponentDecorator {
  constructor(computer: Computer) {
    super(computer);
  }
  print(): void {
    console.log("printing");
  }
}

class ComputerWithGpu extends ComputerComponentDecorator {
  constructor(computer: Computer) {
    super(computer);
  }
  render(): void {
    console.log("rendering");
  }
}

let server = new ServerComputer();
let serverWithPrinter = new ComputerWithprinterDecorator(server);
let serverWithGpu = new ComputerWithGpu(serverWithPrinter);

serverWithGpu.print();
serverWithGpu.render();
