import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInputs } from './dto/create-user.input';
import { UserRepository } from './user.repository';
import { UpdateUserInputTs } from './dto/update-user.input.ts';
import { PostRepository } from 'src/post/post.repository';

@Injectable()
export class UserService {
  
  constructor(private readonly userRepo: UserRepository,
    private readonly postRepo: PostRepository) {}

  public async createUser(createUserInputs: CreateUserInputs) {
    return this.userRepo.createUser(createUserInputs);
  }

  public async getUserById(id) {
    // select * from users left join post on user.user_id = post.user_id where users.user_id = ''
    // return this.userRepo
    //   .createQueryBuilder('user')
    //   .leftJoinAndSelect('user.post', 'p')
    //   .where('user.id =:id', { id })
    //   .getOne();
    return this.userRepo.findOne({relations:['post'],where:{id}})
  }
  public async getAllUser(){
    return this.userRepo.find({ relations: ['post'] });
  }
  public async UpdateUser(id: string, updateUserInput: UpdateUserInputTs){
    const userToUpdate = await this.userRepo.findOne({where:{id}});
    userToUpdate.fullname = updateUserInput.fullname;
    userToUpdate.phoneNumber=updateUserInput.phoneNumber;
    userToUpdate.updatedat=new Date();
    return this.userRepo.save(userToUpdate);

  }

  public async DeleteUser(id: string) {
    const userToDelete = await this.userRepo.findOne({ relations: ["post"], where: { id } });
    if (!userToDelete) {
      throw new Error(`User with ID ${id} not found.`);
    }
  
    // Permanently delete associated posts
    for (const post of userToDelete.post) {
      await this.postRepo.remove(post);
    }
  
    // Soft delete the user
    await this.userRepo.softRemove(userToDelete);
    return userToDelete;
  }
 
  }

