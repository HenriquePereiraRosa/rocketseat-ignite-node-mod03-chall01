import { Connection, createConnection, getConnectionOptions } from "typeorm";

export const connectionInit = async (name = 'default'): Promise<Connection> => {
  try {
    const options = await getConnectionOptions();

    return await createConnection(
      Object.assign(options, {
        name,
      }),
    );
  } catch (error) {
    console.error(error);
  }
};