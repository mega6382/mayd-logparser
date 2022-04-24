import { ILogGenerator } from "../../types/log-generator";
import { Log } from "../log-parser/log";
import { LogFileGenerator } from "./log-file-generator";
jest.mock("../log-parser/log");


test('LogFileGenerator successful write', () => {
  const mockLogFile: jest.Mocked<IOutputFile> = {
    writeFile: jest.fn()
  };
  const mockLogGenerator: jest.Mocked<ILogGenerator> = {
    getLogs: jest.fn()
  };
  const mockLog = <jest.Mock<Log>>Log;

  const logFileGenerator = new LogFileGenerator(mockLogFile, [new mockLog], mockLogGenerator);
  logFileGenerator.generateLogFile();
  expect(mockLogFile.writeFile).toBeCalled();
  expect(mockLogGenerator.getLogs).toBeCalled();
});
