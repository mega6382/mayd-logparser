import { ILogParser } from "../../types/log-parser";
import { LogFileParser } from "./log-file-parser";


test('LogFileParser successful read', async () => {
  const mockLogFile: jest.Mocked<IInputFile> = {
    readFile: jest.fn()
  };
  const mockLogParser: jest.Mocked<ILogParser> = {
    getLogs: jest.fn()
  };

  const logFileParser = new LogFileParser(mockLogFile, mockLogParser);
  await logFileParser.extractLogs();
  expect(mockLogFile.readFile).toBeCalled();
  expect(mockLogParser.getLogs).toBeCalled();
});
