import { Log } from "../log-parser/log";

export class LogGenerator {
  constructor() { }

  getLogs(logs: Log[]): string {
    let generatedLogs = [];
    for (const log of logs) {
      generatedLogs.push(this.generateLog(log));
    }

    return JSON.stringify(generatedLogs);
  }

  private generateLog(log: Log): Record<string, string|undefined> {
    return {
      timestamp: log.logDate.toISOString(),
      loglevel: log.logLevel,
      transactionId: log.transactionId,
      err: log.err
    };
  }
}
