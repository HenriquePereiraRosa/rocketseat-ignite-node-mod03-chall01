import { Connection, createConnection, getConnectionOptions } from "typeorm";

const connection = async (name = 'default'): Promise<Connection> => {
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

export default connection;