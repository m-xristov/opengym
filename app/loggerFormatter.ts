import {ILoggerFormatter} from "./ILoggerFormatter";

export class LoggerFormatter implements ILoggerFormatter {
    private lineCounter: number = 0;

    constructor (public enableLineNumber: boolean = true) {
    }

    public formatMessage(message: any): string {
        let formattedMessage: string = this.getStringRepresentationOfMessage(message);
        return (this.enableLineNumber) ?
                `${this.lineCounter++}: ${formattedMessage}`:
                formattedMessage;
    }
    private trimRight(text: string): string {
        return text.replace(/(,[\s]+)$/g, "");
    }
    public getStringRepresentationOfMessage(message: any): string {
        var type: string = $.type(message),
            text: string = '';
        switch (type) {
            case 'object':
                Object.keys(message).forEach(key => {
                    text += `${key}: ${this.getStringRepresentationOfMessage(message[key])}, `;
                });
                message = `{${this.trimRight(text)}}`;
                break;
            case 'array':
                  message.forEach(element => {
                      text += `${this.getStringRepresentationOfMessage(element)}, `;
                  });
                  message = `[${this.trimRight(text)}]`;
                break;
            default: 
                message = message + '';
                break;
        }
        return message;
    }
}
