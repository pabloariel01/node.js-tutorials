import { ICommand } from "./icommand";

export class CommandWorker{
    private _commands:ICommand[]=[]
    private readonly _interval:number

    constructor(interval:number){
        this._interval=interval
    }

    registerCommand(command:ICommand){
        console.log("registering command: " + command);
        
        if(!this._commands.find(c=>c==command)){
            this._commands.push(command)
        }
    }

    startWorker():any{
        setInterval(()=>{
            let command= this._commands.pop()
            if(command){
                command.execute()
            }
        }, this._interval)
    }
}