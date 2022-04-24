import { LogParser } from "./log-parser";

test('LogParser invalid date', () => {

  const logParser = new LogParser;
  
  const logString = "WrongDate - error - {}";

  try {
    logParser.getLogs(logString);
  } catch (e) {
    expect((e as Error).message).toBe('Invalid Date');
  }
});

test('LogParser invalid logLevel', () => {

  const logParser = new LogParser;
  
  const logString = `${(new Date).toISOString()} - test - {}`;

  try {
    logParser.getLogs(logString);
  } catch (e) {
    expect((e as Error).message).toBe('Invalid Log Level');
  }
});


test('LogParser successfully get logs', () => {

  const logParser = new LogParser;
  
  const date = new Date;
  const logString = `${date.toISOString()} - info - {}`;

  const logs = logParser.getLogs(logString);

  expect(logs).toHaveLength(1);
  expect(logs[0].logDate).toStrictEqual(date);
  expect(logs[0].logLevel).toBe('info');
});
