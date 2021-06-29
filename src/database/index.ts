import { Connection, createConnection, getConnectionOptions } from "typeorm";

export const connectionInit = async (): Promise<Connection> => {
  try {
    let options = await getConnectionOptions();
    options['host'] = 'db'

    return await createConnection(
      Object.assign(options),
    );
  } catch (error) {
    console.error(error);
  }
};