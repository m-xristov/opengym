export interface ILoggerStrategy {
    write(message: any, $logElement: JQuery): void;
}
