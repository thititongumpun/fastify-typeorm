import fastify, { FastifyInstance } from 'fastify';
import fastifyEnv from 'fastify-env';
import routes from './routes';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
const PORT: any = process.env.PORT || 8080;


createConnection()
  .then(async () => {
    const server: FastifyInstance = fastify();

    server.register(routes);
    server.listen(PORT, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      };
      console.log(`Server is Running on ${address}`)
    });

  })
  .catch((error) => console.error(error));