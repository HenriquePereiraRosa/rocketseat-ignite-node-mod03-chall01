import express from 'express';

import path  from 'path';
import { router } from './routes';
import swaggerUi from "swagger-ui-express"
import YAML from "yamljs"


const swagger_path =  path.resolve(__dirname,'./swagger.yml');
const swaggerFile = YAML.load(swagger_path)

const PORT = 3333
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router);

app.listen(PORT, () => console.log("Server is running on PORT: " + PORT + "!"));

export { app }