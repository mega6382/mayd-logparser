import { Arguments } from "./arguments";
import { ParseArgs } from "./parse-args";

test('ParseArgs no input', () => {
  const parseArgs = new ParseArgs(['--output', './outputfile']);
  try {
    parseArgs.parse()
  } catch (e) {
    expect((e as Error).message).toBe('--input is required');
  }
});


test('ParseArgs no output', () => {
  const parseArgs = new ParseArgs(['--input', './inputfile']);
  try {
    parseArgs.parse()
  } catch (e) {
    expect((e as Error).message).toBe('--output is required');
  }
});


test('ParseArgs valid args', () => {
  const parseArgs = new ParseArgs(['--input', './inputfile', '--output', './outputfile']);
  const args = new Arguments('./inputfile', './outputfile');
  expect(parseArgs.parse()).toMatchObject(args);
});
