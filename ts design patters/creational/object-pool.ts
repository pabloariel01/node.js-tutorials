import { GameCharacter, GameCharactersFactory } from "./factory";

export class GameCharacterPool {
  private _warriorPool: GameCharacter[] = [];
  private _magePool: GameCharacter[] = [];
  static WARRIOR_POOL_SIZE = 30;
  static MAGE_POOL_SIZE = 30;

  constructor(private level: number) {
    this.loadWarriorPool();
    this.loadMagePool();
  }

  private loadWarriorPool() {
    for (let i = 0; i < GameCharacterPool.WARRIOR_POOL_SIZE; i++) {
      this._warriorPool.push(GameCharactersFactory.getWarrior(this.level));
    }
  }
  private loadMagePool() {
    for (let i = 0; i < GameCharacterPool.MAGE_POOL_SIZE; i++) {
      this._magePool.push(GameCharactersFactory.getMage(this.level));
    }
  }

  privategetPoolItem<T>(pool: T[], reloadFn: () => void): T {
    let item: T = pool.pop() as T;
    if (!pool.length) {
      reloadFn();
    }

    return item;
  }

  public getWarrior(): GameCharacter {
    return this.privategetPoolItem(
      this._warriorPool,
      this.loadWarriorPool.bind(this)
    );
  }
  public getMage(): GameCharacter {
    return this.privategetPoolItem(
      this._magePool,
      this.loadMagePool.bind(this)
    );
  }
}

let level = 12;
let pool = new GameCharacterPool(level);

for (let i = 0; i < 40; i++) {
  console.log(i + 1);
  console.log(pool.getWarrior());
}
