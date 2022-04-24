import { Log } from "../log-parser/log";
import { LogGenerator } from "./log-generator";

test('LogGenerator successfuly get logs', () => {
  const log = new Log(new Date, 'debug', '1234', 'abc');

  const logGenerator = new LogGenerator();
  
  expect(logGenerator.getLogs([log])).toBe(JSON.stringify([{
    timestamp: log.logDate.toISOString(),
    loglevel: log.logLevel,
    transactionId: log.transactionId,
    err: log.err
  }]));
});
