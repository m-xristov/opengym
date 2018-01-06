import $ from "jquery";
import { ILoggerStrategy } from "./ILoggerStrategy";
import { PrependMessageLoggerStrategy } from "./prependMessageLoggerStrategy";

export class Logger {
    private idOfLogElement = "";
    private countCharsOfLogElementId = 10;

    constructor(private loggerWriterStrategy: ILoggerStrategy =
                        new PrependMessageLoggerStrategy()) {
        this.idOfLogElement = this.generateId(this.countCharsOfLogElementId);
    }
    public write(message: any): void {
        let $log = this.getLogElement();
        if (!$log || !$log.length) {
            $log = this.createLogElement();
        }
        this.loggerWriterStrategy.write(message, $log);
    }
    public getLogElement(): JQuery {
        return $(`#${this.idOfLogElement}`);
    }
    private generateId(countChars: number): string {
        let i: number;
        let id: string = "";
        const possibleChars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const countOfPossibleChars: number = possibleChars.length;
        for (i = 0; i < countChars; i++) {
            id += possibleChars.charAt(Math.floor(Math.random() * countOfPossibleChars));
        }
        return id;
    }
    private createLogElement(): JQuery {
        return $(`<div id="${this.idOfLogElement}"></div>`)
                    .appendTo(document.body);
    }
}
