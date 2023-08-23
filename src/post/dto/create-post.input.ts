import { InputType, Field } from '@nestjs/graphql';


@InputType()
export class CreatePostInput {
  @Field({nullable:true})
  postName: string;

  @Field()
  userId: string;

  @Field({nullable:true})
  PostOrderNumber:number

  @Field({nullable:true})
  createdAt:Date;

  @Field({nullable:true})
  updatedat:Date;

  @Field({nullable:true})
  deletedat:Date

}
