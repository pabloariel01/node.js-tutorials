export class IoCContainer {
  private static _instance: IoCContainer = new IoCContainer();
  private _dependencies: { [key: string]: Object } = {};

  constructor() {
    if (IoCContainer._instance) {
      throw new Error("singletn exists");
    }
    IoCContainer._instance = this;
  }

  public static get instance(): IoCContainer {
    return IoCContainer._instance;
  }

  register(name: string, dependencies: string[], implementation: any) {
    if (this._dependencies[name]) {
      throw new Error("dep exists");
    }

    let dependenciesImplementations =
      this.getDependenciesImplementations(dependencies);
    this._dependencies[name] = new implementation(
      ...dependenciesImplementations
    );
  }

  resolve<T>(name: string): T {
    // console.log(`dependencies ${JSON.stringify(this._dependencies, null, 2)}`);
    console.log(`resolving ${name}`);
    if (!this._dependencies[name]) {
      throw new Error(`unresolved ${name}`);
    }
    return this._dependencies[name] as T;
  }

  private getDependenciesImplementations(names: string[]): Object[] {
    //resolves de dependencies, returns objects from strings in register
    return names.map((name) => this.resolve(name));
  }
}
