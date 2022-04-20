import fs from 'fs';

export class OutputFile {
    private stream: fs.WriteStream;
    constructor (filePath: string) {
        this.stream = fs.createWriteStream(filePath);
    }

}