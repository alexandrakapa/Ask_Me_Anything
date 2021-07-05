import { HttpModule, Module } from "@nestjs/common";
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';

@Module({
  imports: [HttpModule],
  controllers: [AnswerController],
  providers: [AnswerService]
})
export class AnswerModule {}
