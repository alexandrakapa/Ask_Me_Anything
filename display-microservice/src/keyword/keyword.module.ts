import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Keyword } from './keyword.entity';
import { KeywordService } from './keyword.service';
import { KeywordController } from './keyword.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Keyword])],
  providers: [KeywordService],
  controllers: [KeywordController],
})
export class KeywordModule {}
