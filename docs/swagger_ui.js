// swagger_ui.cjs

import express from "express";
import swaggerUi from "swagger-ui-express";
//import swaggerDocument from "../swagger.json";
import swaggerJsdoc from "swagger-jsdoc";
import open from "open";

const portnumber = 8000;

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: "3.0.0",
    info: {
      title: "The myrest-API",
      version: "0.2.0",
      description: "an example REST-API integrated in locapoc",
    },
  },
  apis: ["./src/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

const app = express();

//app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(portnumber, () => {
  console.log(`swagger_ui serves on port ${portnumber}  ...`);
});

// open the browser
await open("http://localhost:8000");
