import { Log } from "../log-parser/log";

export class LogGenerator {
  constructor() { }

  getLogs(logs: Log[]): string {
    let generatedLogs = "";
    for (const log of logs) {
      generatedLogs += `${this.generateLog(log)}\n`;
    }

    return generatedLogs;
  }

  private generateLog(log: Log): string {
    const logData = {
      transactionId: log.transactionId,
      details: log.details,
      err: log.err
    };
    return `${log.logDate.toISOString()} - ${log.logLevel} - ${JSON.stringify(logData)}`;
  }
}
