import fs from 'fs';

export class OutputFile implements IOutputFile {
  private stream: fs.WriteStream;
  constructor(filePath: string) {
    this.stream = fs.createWriteStream(filePath);
  }
  writeFile(data: string): void {
    this.stream.write(data);
    this.stream.destroy();
  }

}
