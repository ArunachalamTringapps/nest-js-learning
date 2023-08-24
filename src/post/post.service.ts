/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepo: PostRepository) {}
  async create(createPostInput: CreatePostInput) {
    return this.postRepo.createPost(createPostInput);
  }

  async getAllPost(){
    const allpost=await this.postRepo.find({relations:['user']})
    if(!allpost){
      throw new Error(`All post is not founded`)
    }
    return allpost;
  }
  async getPostById(id){

    const getpost= await this.postRepo.findOne({relations:['user'],where:{id}})
    if(!getpost){
      throw new NotFoundException(`The post id ${id} is not found `)
    }
    return getpost;
   
  }
  async UpdatePost(id,updatepost){
  const updatedid=  await this.postRepo.update(id,updatepost)
  if(updatedid.affected==0){
    throw new NotFoundException(`Here the post id ${id} is not found to update`)
  }
    return this.postRepo.findOne({where:{id}})
  }
  async DeletePost(id){
    try {
      const post = await this.postRepo.findOne({where:{id}});
      if (!post) {
        throw new Error(`Post with ID ${id} not found.`);
      }
      const deletedPostOrderno=post.PostOrderNumber;
      const deletedPost = await this.postRepo.softRemove(post);
      
      await this.postRepo.createQueryBuilder()
      .update()
      .set({PostOrderNumber:()=>`"PostOrderNumber"-1`})
      .where(`"PostOrderNumber" > :deletedOrderNumber`, { deletedOrderNumber: deletedPostOrderno })
      .execute();
      return deletedPost;
    } catch (error) {
      throw error;
    }
  }
}
