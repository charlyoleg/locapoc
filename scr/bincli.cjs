#! /usr/bin/env node

const process = require('process');

process.argv.push("--directory=webui");

console.log(process.argv);

