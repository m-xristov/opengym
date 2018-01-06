export interface ILoggerFormatter {
    formatMessage(message: any): string;
    getStringRepresentationOfMessage(message: any): string;
}