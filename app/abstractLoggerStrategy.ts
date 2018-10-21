import { ILoggerFormatter } from "./ILoggerFormatter";
import { ILoggerStrategy } from "./ILoggerStrategy";
import { LoggerFormatter } from "./loggerFormatter";

export const NEW_LINE: string = "<br />";

export abstract class AbstractLoggerStrategy implements ILoggerStrategy {
    constructor(public formatter: ILoggerFormatter = new LoggerFormatter()) {}
    public abstract write(message: any, $logElement: JQuery): void;
}
