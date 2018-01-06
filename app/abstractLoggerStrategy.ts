import { ILoggerFormatter } from "./ILoggerFormatter";
import { ILoggerStrategy } from "./ILoggerStrategy";

export const NEW_LINE: string = '<br />';

export abstract class AbstractLoggerStrategy implements ILoggerStrategy {
    constructor (public formatter: ILoggerFormatter) {}
    abstract write(message: any, $logElement: JQuery): void;
}