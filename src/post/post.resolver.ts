import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post,{name:"CreatePost"})
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(createPostInput);
  }

  @Query(()=>[Post])
  getAllPost(){
    return this.postService.getAllPost();
  }

  @Query(()=>Post,{name:"getPostById"})
  getPostById(@Args('id') id:string){
    return this.postService.getPostById(id);
  }

  @Mutation(()=>Post,{name:"UpdatePost"})
  UpdatePost(@Args('id') id:string,@Args('updatepost') updatepost:UpdatePostInput){
    return this.postService.UpdatePost(id,updatepost)
  }

  @Mutation(()=>Post,{name:"Deletepost"})
  async DeletePost(@Args('id') id:string){
    try {
      const post = await this.postService.DeletePost(id);
      return post;
    } catch (error) {
      throw new Error(`Error deleting post: ${error.message}`);
    }
  }
}
