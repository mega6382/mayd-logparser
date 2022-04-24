import { Log } from "../components/log-parser/log";

interface ILogGenerator {
  getLogs(logs: Log[]): string;
}