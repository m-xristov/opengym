import $ from "jquery";

export enum LoggerMode {
    append,
    prepend,
    single
}

const NEW_LINE: string = '<br />';
    
export class Logger {
    private lineCounter:number = 0;
    private idOfLogElement = '';
    private countCharsOfLogElementId = 10;
    constructor(public loggerMode: LoggerMode = LoggerMode.prepend,
                public enableLineNumber: boolean = true) {
        this.lineCounter = 0;
        this.idOfLogElement = this.generateId(this.countCharsOfLogElementId);
    }
    private generateId(countChars: number): string {
        let i:number, id: string = "",
            possible:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (i = 0; i < countChars; i++) {
            id += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return id;
    }
    public log (message: any): void {
        var $log = this.getLogElement();
        if (!$log || !$log.length) {
            $log = this.createLogElement();
        }
        // write message according to selected LoggerMode
        this.writeLog(message, $log);
    }
    private writeLog(message: any, $log: JQuery): void {
        let oldMessage = $log.html();
        let formattedFessage:string = this.formatMessage(message);
        switch (this.loggerMode) {
            case LoggerMode.append:
            formattedFessage = `${oldMessage}
                            ${NEW_LINE}
                            ${formattedFessage}`;
                break;
            case LoggerMode.prepend:
            formattedFessage = `${formattedFessage}
                            ${NEW_LINE}
                            ${oldMessage}`;
                break;
        }
        $log.html(formattedFessage);
    }
    private formatMessage(message: any): string {
        let formattedMessage: string = this.getStringRepresentationOfMessage(message);
        return (this.enableLineNumber) ?
                `${this.lineCounter++}: ${formattedMessage}`:
                formattedMessage;
    }
    private trimStringAtEnd(text: string): string {
        return text.replace(/(,[\s]+)$/g, "");
    }
    private getStringRepresentationOfMessage(message: any): string {
        var type: string = $.type(message),
            text: string = '';
        switch (type) {
            case 'object':
                Object.keys(message).forEach(key => {
                    text += `${key}: ${this.getStringRepresentationOfMessage(message[key])}, `;
                });
                message = `{${this.trimStringAtEnd(text)}}`;
                break;
            case 'array':
                  message.forEach(element => {
                      text += `${this.getStringRepresentationOfMessage(element)}, `;
                  });
                  message = `[${this.trimStringAtEnd(text)}]`;
                break;
            default: 
                message = message + '';
                break;
        }
        return message;
    }

    public getLogElement(): JQuery {
        return $(`#${this.idOfLogElement}`);
    }
    private createLogElement(): JQuery {
        return $(`<div id="${this.idOfLogElement}"></div>`)
                    .appendTo(document.body);
    }
}