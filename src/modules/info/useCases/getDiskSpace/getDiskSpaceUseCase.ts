import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { injectable } from "tsyringe";

@injectable()
export class GetDiskSpaceUseCase {
  async execute(): string {

    const dirTemp = './temp/info/'
    const filename = 'df.txt';
    const cmd = `df -h > ${filename}`;


    fs.stat(dirTemp, (err, stat) => {
      if (err) {

        if (typeof err == 'ENOENT') {
          console.error(`Creating temp dir: ${err}`);
          fs.mkdirSync(dirTemp);
          return;
        } else
          console.error(`Error: ${err}`);
        return;
      }
      console.error("Stat: ", stat);
    });

    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }

      if (stderr) {
        console.error(`exec error: ${stderr}`);
        return;
      }
      console.info("HERE");
      fs.writeFileSync(dirTemp + filename, new Date().toISOString(), 'utf-8')
      fs.writeFileSync(dirTemp + filename, stdout, 'utf-8')
      console.info(stdout);
      return stdout;

    });

  }
}