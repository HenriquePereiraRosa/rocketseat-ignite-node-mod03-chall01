import express from 'express';

import path  from 'path';
import { usersRoutes } from 'routes/users.routes';
import swaggerUi from "swagger-ui-express"
import YAML from "yamljs"


const swagger_path =  path.resolve(__dirname,'./swagger.yml');
const swaggerFile = YAML.load(swagger_path)

const PORT = 3333
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use("/",  () => "Hello World")

app.use("/users", usersRoutes);

app.listen(PORT, () => console.log("Server is running on PORT: " + PORT + "!"));

export { app }