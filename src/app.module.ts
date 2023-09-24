import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    
      MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest-blog-project'),
    
      BlogModule,
    ],
  
  controllers: [],
  providers: [],
})
export class AppModule {}
