import minimist from 'minimist';
import { Arguments } from './arguments';

export class ParseArgs {
    constructor(private readonly args: string[]) {}

    parse(): Args {
        const extractedArgs = minimist(this.args);
        this.throwIfInvalidArgs(extractedArgs);
        return new Arguments(extractedArgs['input'], extractedArgs['output']);
    }

    private throwIfInvalidArgs(args: Record<string, string>): void {
        if (!args['input']) {
            throw new Error('--input is required');
        }
        if (!args['output']) {
            throw new Error('--output is required');
        }
    }
}