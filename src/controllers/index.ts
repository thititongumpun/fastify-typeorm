import { FastifyRequest } from 'fastify';
import { UserModel } from '../interfaces/user';
import { UserService } from '../services'
import { User } from '../entity/User';

const getAllUser = (): Promise<User[]> => {
  const users = UserService.getAllUser();
  return users;
};

const createUser = (request: FastifyRequest<{Body: UserModel}>): Promise<User | undefined> => {
  const userModel = request.body;
  const user = UserService.createUser(userModel);
  return user;
}

export {
  getAllUser,
  createUser
}