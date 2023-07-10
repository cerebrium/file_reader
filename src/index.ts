import * as fs from 'fs';
import * as readline from 'node:readline';
import { sig_bug_line_split } from './line_functions/sigBug';

function main() {
  console.log("Running main")
  const [_, __, file_name] = process.argv;
  read_file_contents_by_line({ file_name, line_func: sig_bug_line_split })
}

function read_file_contents_by_line({ file_name, line_func }: { file_name: string, line_func: (line: string) => void }) {
  const readline_interface = readline.createInterface({
    input: fs.createReadStream(`./Files/${file_name}`, 'utf8')
  })

  readline_interface.on('line', line_func)

  readline_interface.on('close', () => {
    console.log("file finished")
    process.exit(0)
  })
}

main()
