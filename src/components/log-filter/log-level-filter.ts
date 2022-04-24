import { Log } from "../log-parser/log";

export class LogLevelFilter {
  constructor (private readonly logs: Log[], private readonly logLevel: 'info' | 'debug' | 'warn' | 'error') {}

  getFilteredLogs(): Log[] {
    const filteredLogs = [];
    for (const log of this.logs) {
      if (log.logLevel === this.logLevel) {
        filteredLogs.push(log);
      }
    }

    return filteredLogs;
  }
}
