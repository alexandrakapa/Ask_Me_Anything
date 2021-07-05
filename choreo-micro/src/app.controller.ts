import { Controller, Get, HttpService, Post, Req, Res } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private httpService: HttpService,) {}



  @Post('bus')
  async getEvent(@Req() req, @Res() res) {
    //SET questions "[{\"questions\":[]}]"
    const category = req.body.category;
    if(category == "question") {
      console.log(req.body.keywords[0]);
      let new_saved = await this.appService.getSomeValue('questions');
      let inbox = new_saved[0].questions;
      inbox.push([req.body.id,req.body.title,req.body.text,req.body.askedFrom,req.body.askedOn,req.body.keywords[0].keyword_id,req.body.keywords[0].keyword_phrase]);
      const new_obj = [
        {
          questions: inbox,
        },
      ];
      await this.appService.setSomeValue('questions', new_obj);
      const saved_subs = await this.appService.getSomeValue('subscribers');
      const answer_subscribers = saved_subs[0].subscribers[0];//question-answer channel
      console.log(answer_subscribers);
      for (let i = 0; i < answer_subscribers.length; i++) {
        console.log('sending to : '+ answer_subscribers[i]);
        await this.httpService
          .post(answer_subscribers[i], { id: req.body.id })
          .toPromise();
      }
      const display_subscribers = saved_subs[0].subscribers[1];//display-question channel
      console.log("display");
      console.log(display_subscribers);
      for (let i = 0; i < display_subscribers.length; i++) {
        console.log('sending to : '+ display_subscribers[i]);
        await this.httpService
          .post(display_subscribers[i]+"/question", {
            id: req.body.id,
            title: req.body.title,
            text: req.body.text,
            askedFrom: req.body.askedFrom,
            askedOn: req.body.askedOn,
            keywords: req.body.keywords,

          })
          .toPromise();
      }
      const statistics_subscribers = saved_subs[0].subscribers[2];//statistics-question channel
      console.log("statistics");
      console.log(statistics_subscribers);
      for (let i = 0; i < statistics_subscribers.length; i++) {
        console.log('sending to : '+ statistics_subscribers[i]);
        await this.httpService
          .post(statistics_subscribers[i], {
            id: req.body.id,
            askedFrom: req.body.askedFrom,
            askedOn: req.body.askedOn,
            keywords: req.body.keywords,
          })
          .toPromise();
      }

    }else if(category =="answer"){

      console.log("starting answer handler");
      let new_saved = await this.appService.getSomeValue('answers');
      let inbox = new_saved[0].answers;
      inbox.push([req.body.id,req.body.text,req.body.isAnAnswerOf.question_id,req.body.answeredFrom]);
      const ans_obj = [
        {
          answers: inbox,
        },
      ];
      await this.appService.setSomeValue('answers', ans_obj);
      const saved_subs = await this.appService.getSomeValue('subscribers');

      const display_subscribers = saved_subs[0].subscribers[1];//display-question channel
      console.log(display_subscribers);
      for (let i = 0; i < display_subscribers.length; i++) {
        let cur_addr = display_subscribers[i]+"/answer";
        console.log(cur_addr);
        await this.httpService
          .post(cur_addr, {
            id: req.body.id,
            text: req.body.text,
            answeredFrom: req.body.answeredFrom,
            answeredOn: req.body.answeredOn,
            isAnAnswerOf:req.body.isAnAnswerOf,

          })
          .toPromise();
      }
    }
    res.send('ok');
  }
}
