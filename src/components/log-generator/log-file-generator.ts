import { ILogGenerator } from "../../types/log-generator";
import { Log } from "../log-parser/log";

export class LogFileGenerator {
  constructor(
    private readonly logsFile: IOutputFile,
    private readonly logs: Log[],
    private readonly logGenerator: ILogGenerator) { }

    generateLogFile() {
      const logsAsText = this.logGenerator.getLogs(this.logs);
      this.logsFile.writeFile(logsAsText);
    }
}
