import { ConsoleErrorDisplayStrategy } from "./error-display";
import { ErrorHandler } from "./error-handler";
import { FileErrorLogginStrategy } from "./error-loggin";

let errorHandler = new ErrorHandler(
  new ConsoleErrorDisplayStrategy(),
  new FileErrorLogginStrategy()
);

try {
  let b: any = 2;
  b();
} catch (err) {
  errorHandler.handle(err, "error title", "error body");
}
