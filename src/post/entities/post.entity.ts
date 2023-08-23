import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,

} from 'typeorm';

@ObjectType()
@Entity({ name: 'post' })
export class Post {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'post_id' })
  id: string;

  @Field()
  @Column({ name: 'post_name' })
  name: string;

  @Field({nullable:true})
  @Column({name:"PostOrderNumber",type:"numeric",nullable:true})
  PostOrderNumber:number

  @Field({nullable:true})
  @CreateDateColumn({name:"Created_at_post",type:'timestamp',nullable:true})
  createdAt:Date;

  @Field({nullable:true})
  @Column({name:"Updated_at_post",type:"timestamp",nullable:true})
  updatedat:Date

  @Field({nullable:true})
  @DeleteDateColumn({name:"Deleted_at_post",type:"timestamp",nullable:true})
  deletedat:Date

  @Field()
  @ManyToOne(() => User, (user) => user.post)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Field()
  @Column({ name: 'user_id' })
  userId: string;
}
