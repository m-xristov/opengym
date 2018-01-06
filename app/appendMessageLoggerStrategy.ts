import { AbstractLoggerStrategy, NEW_LINE } from "./abstractLoggerStrategy";

export class AppendMessageLoggerStrategy extends AbstractLoggerStrategy {
    write(message: any, $logElement: JQuery): void {
        let oldMessage = $logElement.html(),
            formattedMessage:string = `${oldMessage}
                            ${NEW_LINE}
                            ${this.formatter.formatMessage(message)}`;
        $logElement.html(formattedMessage);
    }
}