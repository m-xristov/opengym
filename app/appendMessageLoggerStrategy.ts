import { AbstractLoggerStrategy, NEW_LINE } from "./abstractLoggerStrategy";

export class AppendMessageLoggerStrategy extends AbstractLoggerStrategy {
    public write(message: any, $logElement: JQuery): void {
        const oldMessage = $logElement.html();
        const formattedMessage: string = `${oldMessage}
                            ${NEW_LINE}
                            ${this.formatter.formatMessage(message)}`;
        $logElement.html(formattedMessage);
    }
}
