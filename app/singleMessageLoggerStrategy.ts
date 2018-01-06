import { AbstractLoggerStrategy } from "./abstractLoggerStrategy";

export class SingleMessageLoggerStrategy extends AbstractLoggerStrategy {
    write(message: any, $logElement: JQuery): void {
        $logElement.html(this.formatter.formatMessage(message));
    }
}