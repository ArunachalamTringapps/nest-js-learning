import { Injectable } from '@nestjs/common/decorators';
import { BaseRepository } from 'src/database/base.respoitory';
import { DataSource } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostRepository extends BaseRepository<Post> {
  constructor(private readonly dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }

  async createPost(createPostInput: CreatePostInput) {
    const{userId,postName}=createPostInput
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
