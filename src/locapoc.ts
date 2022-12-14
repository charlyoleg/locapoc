// localpoc.ts

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import fs from "node:fs";
import process from "node:process";
import express from "express";
import open from "open";
import getport from "get-port";
import myrest from "./myrest.js";
//import path from "node:path";
//import { fileURLToPath } from "node:url";

// __dirname
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

// sub-routines
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function stop_the_app() {
  await sleep(1000);
  process.exit(0);
}

// cli
const argv = yargs(hideBin(process.argv))
  //.scriptName("locapoc")
  .version("0.2.0")
  .usage("Usage: $0 --port <port> --directoy <directory-path>")
  .example([
    [
      "$0 -p 2022 -d MyPublic",
      "run the webserver on port 2022 and serve the content of the folder MyPublic",
    ],
  ])
  .option("directory", {
    alias: "d",
    type: "string",
    description: "path to the directory to be served.",
    //default: `${__dirname}/webui`,
    default: "",
  })
  .option("browser", {
    alias: "b",
    type: "boolean",
    description: "Open the browser at the corresponding URL.",
    default: true,
  })
  .option("quitable", {
    alias: "q",
    type: "boolean",
    description: "Enable the endpoint /api/quit to stop this http-server.",
    default: true,
  })
  .option("cors", {
    alias: "c",
    type: "boolean",
    description:
      "Set http-header to allow Cross Origin Resource Sharing (CORS).",
    default: false,
  })
  .option("port", {
    alias: "p",
    type: "number",
    description:
      "port-number used by this web-server. If set to 0 an available port-number is automatically selected",
    default: 0,
  })
  .option("host", {
    type: "string",
    description:
      "Set http-header to allow Cross Origin Resource Sharing (CORS).",
    default: "127.0.0.1",
  })
  .strict()
  .parseSync();

// sanity checks for argv.directory
if (argv.directory !== "") {
  if (!fs.existsSync(argv.directory)) {
    console.error(`ERR339: Error, the path ${argv.directory} doesn't exist!`);
    process.exit(-1);
  }
}

// useless main function to avoid the top-level await issue by bundling with esbuild
async function main() {
  // port-number logic
  let portnumber = argv.port;
  if (portnumber === 0) {
    portnumber = await getport();
  }

  // the main
  const app = express();

  // tell the browser to allow CORS for any origin
  if (argv.cors) {
    console.log("INFO856: CORS (cross origin resource sharing) are permitted.");
    app.use("/", (req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      next();
    });
  } else {
    console.log(
      "INFO328: CORS (cross origin resource sharing) are not permitted."
    );
  }

  // middleware myrest
  app.use("/api/myrest", myrest);

  // rest-api endpoint /api/quit
  /**
   *  @openapi
   *  /api/quit:
   *    post:
   *      description: quit the current http-server
   *      responses:
   *        '200':
   *          description: OK with a small message
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                properties:
   *                  msg:
   *                    type: string
   */
  if (argv.quitable) {
    app.post("/api/quit", (req, res) => {
      stop_the_app();
      return res.json({ msg: "The http-server will quit in a second" });
    });
  }

  // static content
  if (argv.directory !== "") {
    app.use(express.static(argv.directory));
  }

  // spin the http-server
  app.listen(portnumber, argv.host, () => {
    console.log(
      `locapoc serves on port ${portnumber} for host ${argv.host} the directory ${argv.directory} ...`
    );
  });

  // open the browser
  await sleep(1000);
  const url = `http://localhost:${portnumber}`;
  if (argv.browser) {
    console.log(`Your browser should open automatically at ${url}`);
    await open(url);
  } else {
    console.log(`Please, open the browser at ${url}`);
  }

  // final message
  console.log("Press ctrl-c to stop this http-server ...");
}

main();
