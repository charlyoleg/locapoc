// swaggerDefinition.cjs

const swaggerJsdoc = require("swagger-jsdoc");

module.exports = {
  openapi: "3.0.0",
  info: {
    title: "Helloj Woj",
    version: "1.2.3",
    description: "myrest great api",
  },
  servers: [
    {
      url: "http://localhost:2022",
      description: "the development server of locapoc with its fetish port-number"
    }
  ],
};
