import { CreatePostInput } from './create-post.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput{
  @Field()
  name: string;

  @Field({nullable:true})
  userId: string;

  @Field({defaultValue:new Date(),nullable:true})
  updatedat:Date;


}
