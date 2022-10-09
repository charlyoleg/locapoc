#! /usr/bin/env node

const process = require("process");

process.argv.push("--directory=node_modules/locapoc/dist/bin/webui");

console.log(process.argv);
//console.log(process.env);
