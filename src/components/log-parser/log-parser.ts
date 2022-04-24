import { ILogParser } from "../../types/log-parser";
import { Log } from "./log";

export class LogParser implements ILogParser {
  constructor() { }

  getLogs(logs: string): Log[] {
    const parsedLogs = [];
    const logLines = logs.split('\n');
    for (const logLine of logLines) {
      parsedLogs.push(this.parse(logLine));
    }
    return parsedLogs;
  }

  private parse(logLine: string): Log {
    const [date, level, ...additionalInfo] = logLine.split(' - ');
    const logData = JSON.parse(additionalInfo.join(' - '));
    const log = new Log(new Date(date), level, logData.transactionId, logData.details, logData?.err);
    this.validate(log);

    return log;
  }

  private validate(log: Log): void {
    if (!log.logDate) {
      throw new Error("Invalid Date");
    }
    if (!['warn', 'info', 'error', 'debug'].includes(log.logLevel)) {
      throw new Error("Invalid Log Level");
    }
  }
}
