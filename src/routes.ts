import { FastifyInstance } from 'fastify'
import {getAllUser, createUser} from './controllers/index';

const routes = (fastify: FastifyInstance, opts: any, done: any) => {
  fastify.get('/users', getAllUser);
  fastify.post('/users', createUser);

  done();
};

export default routes;