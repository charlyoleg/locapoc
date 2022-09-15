// localpoc.ts

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import fs from 'node:fs';
import express from 'express';

// cli
const argv = yargs(hideBin(process.argv))
  //.scriptName("locapoc")
  .version('0.2.0')
  .usage("Usage: $0 --port <port> --directoy <directory-path>")
  .example([
    ["$0 -p 2022 -d MyPublic", "run the webserver on port 2022 and serve the content of the folder MyPublic"],
    ])
  .option('port', {
    alias: 'p',
    type: 'number',
    description: 'port-number used by this web-server. If set to 0 an available port-number is automatically selected',
    default: 0
    })
  .option('directory', {
    alias: 'd',
    type: 'string',
    description: 'path to the directory to be served.',
    default: ''
    })
  .option('browser', {
    alias: 'b',
    type: 'boolean',
    description: 'Open the browser at the corresponding URL.',
    default: true
    })
  .option('cors', {
    alias: 'c',
    type: 'boolean',
    description: 'Set http-header to allow Cross Origin Resource Sharing (CORS).',
    default: false
    })
  .option('host', {
    type: 'string',
    description: 'Set http-header to allow Cross Origin Resource Sharing (CORS).',
    default: '127.0.0.1'
    })
  .strict()
  .parseSync();


// sanity checks
if (argv.directory === '') {
  console.error(`ERR334: Error, you must specify a not empty directory-path!`);
  process.exit(-1);
}
if (! fs.existsSync(argv.directory)) {
  console.error(`ERR339: Error, the path ${argv.directory} doesn't exist!`);
  process.exit(-1);
}

// the main
const app = express();
// tell the browser to allow CORS for any origin
app.use("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
// static content
app.use(express.static(argv.directory));
app.listen(argv.port, () => {
  console.log(`Serving on port ${argv.port} the content of the directory ${argv.directory} ...`);
});

