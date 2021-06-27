import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import path  from 'path';

import swaggerUi from "swagger-ui-express"
import YAML from "yamljs"

import "./config/database/tsyringe/container";
import { router } from './routes';
import createConnection from "./config/database";
import { AppError } from "./errors/AppError";


const swagger_path =  path.resolve(__dirname,'./swagger.yml');
const swaggerFile = YAML.load(swagger_path)

const PORT = 3333
createConnection(); // Create DB Connection
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response
            .status(err.statusCode)
            .json({ message: err.message });
    }
    console.error(err); // Change to file Log
    return response.status(500).json({
        status: "Internal Server Error",
        message: (err.message) ? `${err.message}` : `No detailed Message`
    });

})

app.listen(PORT, () => console.log("Server is running on PORT: " + PORT + "!"));

export { app }