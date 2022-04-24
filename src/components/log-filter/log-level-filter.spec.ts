import { Log } from "../log-parser/log";
import { LogLevelFilter } from "./log-level-filter";

test('LogLevelFilter empty result', () => {
  const logFilter = new LogLevelFilter([new Log(new Date, 'error', '1234', '')], 'debug');

  expect(logFilter.getFilteredLogs()).toHaveLength(0);
});


test('LogLevelFilter 1 result', () => {
  const logFilter = new LogLevelFilter([new Log(new Date, 'error', '1234', '')], 'error');

  expect(logFilter.getFilteredLogs()).toHaveLength(1);
});
