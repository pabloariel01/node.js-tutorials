interface ICardComponent {
  add(component: ICardComponent): void;
  remove(component: ICardComponent): void;
  get(index: number): ICardComponent;
  display(): string;
}

export class Card implements ICardComponent {
  add(component: ICardComponent): void {
    throw new Error("Method not implemented.");
  }
  remove(component: ICardComponent): void {
    throw new Error("Method not implemented.");
  }
  get(index: number): ICardComponent {
    throw new Error("Method not implemented.");
  }
  display(): string {
    return `${this.name} : ${this.attack}`;
  }

  constructor(public name: string, public attack: number) {}
}

class CardDeck implements ICardComponent {
  private _deck: ICardComponent[] = [];
  add(component: ICardComponent): void {
    this._deck.push(component);
  }
  remove(component: ICardComponent): void {
    this._deck = this._deck.filter((comp) => comp != component);
  }
  get(index: number): ICardComponent {
    return this._deck[index];
  }
  display(): string {
    return this._deck.map((component) => component.display()).join("\n");
  }
}

let cardDeck= new CardDeck()
cardDeck.add(new Card("card 1",22))
cardDeck.add(new Card("card 1",22))
let secondDeck =new CardDeck()
secondDeck.add(new Card("card 1",22))
secondDeck.add(new Card("card 1",22))
cardDeck.add(secondDeck)

console.log(cardDeck.display())