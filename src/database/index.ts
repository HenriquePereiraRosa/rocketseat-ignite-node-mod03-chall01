import { Connection, createConnection, getConnectionOptions } from "typeorm";

export const connectionInit = async (name = 'default'): Promise<Connection> => {
  try {
    let options = await getConnectionOptions();
    options['host'] = 'db'

    return await createConnection(
      Object.assign(options, {
        name,
      }),
    );
  } catch (error) {
    console.error(error);
  }
};