import { getManager, getRepository } from 'typeorm';
import { User } from '../entity/User';
import { UserModel } from '../interfaces/user';

const getAllUser = async (): Promise<User[]> => {
  return await getManager().find(User);
};

const createUser = async (user: UserModel): Promise<User> => {
  return await getRepository(User).save(user);
};

export default {
  getAllUser,
  createUser
}