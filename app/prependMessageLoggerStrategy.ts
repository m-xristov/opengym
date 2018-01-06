import { AbstractLoggerStrategy, NEW_LINE } from "./abstractLoggerStrategy";

export class PrependMessageLoggerStrategy extends AbstractLoggerStrategy {
    public write(message: any, $logElement: JQuery): void {
        const oldMessage = $logElement.html(),
            formattedMessage: string = `${this.formatter.formatMessage(message)}
                            ${NEW_LINE}
                            ${oldMessage}`;
        $logElement.html(formattedMessage);
    }
}
