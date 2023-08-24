import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { Post } from './entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostRepository } from './post.repository';
import { UserRepository } from 'src/user/user.repository';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post,User])],
  providers: [PostResolver, PostService, PostRepository,UserRepository]
})
export class PostModule {}
