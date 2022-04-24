import { Log } from "../components/log-parser/log";

interface ILogParser {
  getLogs(logs: string): Log[];
}
