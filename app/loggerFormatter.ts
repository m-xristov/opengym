import {ILoggerFormatter} from "./ILoggerFormatter";

export class LoggerFormatter implements ILoggerFormatter {
    private lineCounter: number = 0;

    constructor(public enableLineNumber: boolean = true) {
    }

    public formatMessage(message: any): string {
        const formattedMessage: string = this.getStringRepresentationOfMessage(message);
        return (this.enableLineNumber) ?
                `${this.lineCounter++}: ${formattedMessage}` :
                formattedMessage;
    }
    public getStringRepresentationOfMessage(message: any): string {
        const type: string = $.type(message);
        let text: string = "";
        switch (type) {
            case "object":
                Object.keys(message).forEach((key) => {
                    text += `${key}: ${this.getStringRepresentationOfMessage(message[key])}, `;
                });
                message = `{${this.trimRight(text)}}`;
                break;
            case "array":
                  message.forEach((element) => {
                      text += `${this.getStringRepresentationOfMessage(element)}, `;
                  });
                  message = `[${this.trimRight(text)}]`;
                  break;
            default:
                message = message + "";
                break;
        }
        return message;
    }
    private trimRight(text: string): string {
        return text.replace(/(,[\s]+)$/g, "");
    }
}
