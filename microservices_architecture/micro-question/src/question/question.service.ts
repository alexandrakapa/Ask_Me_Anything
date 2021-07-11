import { HttpService, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { getManager } from 'typeorm';
import { Keyword } from '../keyword/keyword.entity';
import { Question } from './entities/question.entity';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { map } from 'rxjs/operators';

@Injectable()
export class QuestionService {
  constructor(
    @InjectEntityManager() private questionManager: EntityManager,
    private httpService: HttpService,
  ) {}

  async createQuestion(title, text, user, keywords) {
    const keys = [];
    if(typeof keywords == "string"){
      console.log("string: "+keywords)
      const cur_key = await getManager()
        .createQueryBuilder(Keyword, 'keyword')
        .where('keyword_phrase = :phrase', { phrase: keywords })
        .getOne();
      if (cur_key) {
        keys.push(cur_key);
      } else {
        const keyword = new Keyword();
        keyword.keyword_phrase = keywords;
        await this.questionManager.save(keyword);
        keys.push(keyword);
      }
    } else {
      for (let i = 0; i < keywords.length; i++) {
        console.log("array: "+keywords)
        console.log("cur: "+keywords[i])

        const cur_key = await getManager()
          .createQueryBuilder(Keyword, 'keyword')
          .where('keyword_phrase = :phrase', { phrase: keywords[i] })
          .getOne();
        if (cur_key) {
          console.log("here true");
          keys.push(cur_key);
        } else {
          const keyword = new Keyword();
          keyword.keyword_phrase = keywords[i];
          await this.questionManager.save(keyword);
          keys.push(keyword);
        }
      }
    }
    const question = new Question();
    question.title = title;
    question.text = text;
    question.askedFrom = user;
    question.keywords = keys;
    // console.log(question.question_id)
    let saved_qu = await this.questionManager.save(question);
      // console.log(new_question.raw[0].question_id);
    console.log(saved_qu.question_id)
      return this.httpService
        .post('https://choreo-microservice.herokuapp.com/bus', { id: saved_qu.question_id,title:title,text:text,askedFrom:user,askedOn:saved_qu.askedOn,keywords:keys, category:"question"})
        .toPromise();
    }
    catch (error) {
      console.log("The new question could not be imported")
    }

    // const new_question = await getManager()
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Question)
    //   .values([
    //     {
    //       title: title,
    //       text: text,
    //       askedFrom: user,
    //       keywords: keys,
    //     },
    //   ])
    //   .returning(['question_id','askedOn'])
    //   .execute();
    // console.log(new_question.raw[0].question_id);
    // return this.httpService
    //   .post('http://localhost:3200/bus', { id: new_question.raw[0].question_id,title:title,text:text,askedFrom:user,askedOn:new_question.raw[0].askedOn,keywords:keys, category:"question"})
    //   // .toPromise();


  // }


  create(createQuestionDto: CreateQuestionDto) {
    return 'This action adds a new question';
  }


//   findAll(): Promise<Question[]> {
  //     return this.questionRepo.find({relations: ["keywords"]});
//   }
//
//   findOne(id: number) {
//     return `This action returns a #${id} question`;
//   }
//
//   update(id: number, updateQuestionDto: UpdateQuestionDto) {
//     return `This action updates a #${id} question`;
//   }
//
//   remove(id: number) {
//     return `This action removes a #${id} question`;
//   }
}
