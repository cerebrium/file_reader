"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const readline = require("node:readline");
const sigBug_1 = require("./line_functions/sigBug");
function main() {
    console.log("Running main");
    const [_, __, file_name] = process.argv;
    read_file_contents_by_line({ file_name, line_func: sigBug_1.sig_bug_line_split });
    const file_contents = (file_name);
    console.log("file contents: ", file_contents);
}
function read_file_sync(file_name) {
    try {
        const file_contents = fs.readFileSync(`./Files/${file_name}`, 'utf8');
        return file_contents;
    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
}
function read_file_contents_by_line({ file_name, line_func }) {
    const readline_interface = readline.createInterface({
        input: fs.createReadStream(`./Files/${file_name}`, 'utf8')
    });
    readline_interface.on('line', line_func);
    readline_interface.on('close', () => {
        console.log("file finished");
        process.exit(0);
    });
}
main();
//# sourceMappingURL=index.js.map