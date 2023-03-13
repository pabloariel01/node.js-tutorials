import { CommandWorker } from "./command-worker";
import { LogCommand, LogCommandParams } from "./log-command";

async function sleep(duration): Promise<any> {
  return new Promise((res, rej) => {
    setTimeout(res, duration);
  });
}

async function testPattern(): Promise<any> {
  let commandWorker = new CommandWorker(5000);
  while (true) {
    try {
      sleep(1000);
      let b: any = 100;
      b();
    } catch (err) {
      let param: LogCommandParams = {
        title: "oops",
        body: "try later",
        error: err,
        file: "./logs/error.log",
      };
      commandWorker.registerCommand(new LogCommand(param));
    }
  }
}

testPattern();
