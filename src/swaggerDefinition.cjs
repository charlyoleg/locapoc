// swaggerDefinition.cjs

const swaggerJsdoc = require("swagger-jsdoc");

module.exports = {
  openapi: "3.0.0",
  info: {
    title: "The myrest-API",
    version: "0.2.0",
    description: "an example REST-API integrated in locapoc",
  },
  servers: [
    {
      url: "http://localhost:2022",
      description:
        "the development server of locapoc with its fetish port-number",
    },
  ],
};
