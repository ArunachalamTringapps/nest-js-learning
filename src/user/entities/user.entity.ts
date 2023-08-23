import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  id: string;

  @Field()
  @Column({ name: 'user_name' })
  fullname: string;

  @Field()
  @Column({name:"Phone_no",type:"numeric"})
  phoneNumber:number;

  @Field({nullable:true})
  @CreateDateColumn({ name: "Createdat_user" ,type:"timestamp",nullable:true})
  createdAt:Date;

  @Field({nullable:true})
  @Column({name:"Updatedat_user",type:"timestamp",nullable:true})
  updatedat:Date

  @Field({nullable:true})
  @DeleteDateColumn({name:"Deletedat_user",type:"timestamp",nullable:true})
  deletedat:Date

  @Field(() => [Post], { nullable: true })
  @OneToMany(() => Post, (post) => post.user)
  post: Post[];
}
