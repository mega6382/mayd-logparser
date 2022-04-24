import fs from "fs";

export class InputFile implements IInputFile {
  private stream: fs.ReadStream;
  constructor(filePath: string) {
    this.stream = fs.createReadStream(filePath);
  }

  async readFile(): Promise<string> {
    const chunks = [];
    for await (const chunk of this.stream) {
        chunks.push(Buffer.from(chunk));
    }
    this.stream.destroy();
    return Buffer.concat(chunks).toString("utf-8");
  }
}
