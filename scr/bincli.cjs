#! /usr/bin/env node

const process = require("process");

process.argv.push(`--directory=${__dirname}/webui`);

console.log(process.argv);
//console.log(process.env);
