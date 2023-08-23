
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInputTs {
  @Field()
  fullname: string;
  @Field()
  phoneNumber:number
  @Field({nullable:true})
  updateat:Date
}
