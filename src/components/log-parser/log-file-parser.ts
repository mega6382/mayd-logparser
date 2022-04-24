import { ILogParser } from "../../types/log-parser";
import { InputFile } from "../files-manager/input-file";
import { Log } from "./log";

export class LogFileParser {
  constructor(private readonly logsFile: IInputFile, private readonly logParser: ILogParser) {}

  async extractLogs(): Promise<Log[]> {
    const logs = await this.logsFile.readFile();
    return this.logParser.getLogs(logs);
  }
}
