import fs from "fs";
export interface IErrorLoggingStrategy {
  log(err: Error): Promise<any>;
}

export class FileErrorLogginStrategy implements IErrorLoggingStrategy {
  async log(err: Error): Promise<any> {
    return await fs.appendFile("logs/error.log", err.message, "utf8", (err) => {
      console.log("error");
    });
  }
}
