import { ICommand } from "./icommand";
import fs from "fs";

export interface LogCommandParams {
  title: string;
  body: string;
  error: Error;
  file: string;
}

export class LogCommand implements ICommand {
  private readonly _logCommandParams: LogCommandParams;

  constructor(params: LogCommandParams) {
    this._logCommandParams = params;
  }
  execute(): Promise<any> {
    return new Promise((resolve, reject) => {
      fs.appendFile(
        this._logCommandParams.file,
        this._logCommandParams.body,
        "utf8",
        (err) => {
          console.log("err");
        }
      );
      resolve(true);
    });
  }
}
