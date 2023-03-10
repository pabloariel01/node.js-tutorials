export interface GameCharacter {
  strenght: number;
  dexterity: number;
  health: number;
  magic: number;
}

export class GameCharactersFactory {
  public static getWarrior(level: number): GameCharacter {
    let warrior: GameCharacter;
    if (level < 10) {
      warrior = {
        strenght: 18,
        dexterity: 12,
        health: 20,
        magic: 0,
      };
    } else {
      warrior = {
        strenght: 30,
        dexterity: 21,
        health: 40,
        magic: 0,
      };
    }
    return warrior;
  }

  public static getMage(level: number): GameCharacter {
    let mage: GameCharacter;
    if (level < 10) {
      mage = {
        strenght: 0,
        dexterity: 12,
        health: 20,
        magic: 18,
      };
    } else {
      mage = {
        strenght: 0,
        dexterity: 21,
        health: 40,
        magic: 40,
      };
    }
    return mage;
  }
}

//main

let warrior = GameCharactersFactory.getWarrior(6);
let mage = GameCharactersFactory.getMage(10);

console.log("warrior", warrior);
