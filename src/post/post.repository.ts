import { Injectable } from '@nestjs/common/decorators';
import { BaseRepository } from 'src/database/base.respoitory';
import { DataSource } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './entities/post.entity';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class PostRepository extends BaseRepository<Post> {
  constructor(private readonly dataSource: DataSource  ,private readonly userRepo: UserRepository,) {
    super(Post, dataSource.createEntityManager());
  }

  async createPost(createPostInput: CreatePostInput) {
    const{userId,postName}=createPostInput
    const userIdfind=await this.userRepo.findOne({where:{id:userId}});
    if(!userIdfind){
      throw new Error(`User With Id ${userId} is not found`)
    }
    const newPost=new Post();
    newPost.name=postName
    newPost.userId=userId;
    const count=await this.count({where:{userId:newPost.userId}})
    newPost.PostOrderNumber=count+1
    return this.save(
     newPost
    );
  }
}
