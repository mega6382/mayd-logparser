import fs from "fs";

export class InputFile {
    private stream: fs.ReadStream;
    constructor(filePath: string) {
        this.stream = fs.createReadStream(filePath);
    }
}