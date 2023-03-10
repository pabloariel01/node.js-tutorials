export interface IErrorDisplayStrategy {
  display(title: string, body: string): void;
}


export class ConsoleErrorDisplayStrategy implements IErrorDisplayStrategy{
    display(title: string, body: string): void {
        console.log(`${title},${body}`)
    }
}