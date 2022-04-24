import { ParseArgs } from "./components/args-parser/parse-args";
import { InputFile } from "./components/files-manager/input-file";
import { OutputFile } from "./components/files-manager/output-file";
import { LogFileParser } from "./components/log-parser/log-file-parser";
import { LogParser } from "./components/log-parser/log-parser";
import { LogFileGenerator } from "./components/log-generator/log-file-generator";
import { LogGenerator } from "./components/log-generator/log-generator";
import { LogLevelFilter } from "./components/log-filter/log-level-filter";


(async function () {
  try {
  const argsParser = new ParseArgs(process.argv.slice(2));

  const args = argsParser.parse();

  const inputFile = new InputFile(args.inputFile);
  const outputFile = new OutputFile(args.outputFile);

  const logParser = new LogParser;
  const logFileParser = new LogFileParser(inputFile, logParser);

  const parsedLogs = await logFileParser.extractLogs();

  const logFilter = new LogLevelFilter(parsedLogs, 'error');

  const filteredLogs = logFilter.getFilteredLogs();

  const logGenerator = new LogGenerator();
  const logFileGenerator = new LogFileGenerator(outputFile, filteredLogs, logGenerator);

  logFileGenerator.generateLogFile();

  console.log('Done!');

  } catch (err) {
    console.log(err);
  }
})();
