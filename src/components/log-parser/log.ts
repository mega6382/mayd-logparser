export class Log {

  constructor(
    readonly logDate: Date,
    readonly logLevel: string,
    readonly transactionId: string,
    readonly details: string,
    readonly err?: string) {
  }

}
