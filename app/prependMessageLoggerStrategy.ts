import { AbstractLoggerStrategy, NEW_LINE } from "./abstractLoggerStrategy";

export class PrependMessageLoggerStrategy extends AbstractLoggerStrategy {
    write(message: any, $logElement: JQuery): void {
        let oldMessage = $logElement.html(),
            formattedMessage:string = `${this.formatter.formatMessage(message)}
                            ${NEW_LINE}
                            ${oldMessage}`;
        $logElement.html(formattedMessage);
    }
}