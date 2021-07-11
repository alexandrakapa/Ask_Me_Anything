import { Controller, Get, HttpService, Post, Req, Res } from "@nestjs/common";
import { AppService } from './app.service';
import { RedisService } from "nestjs-redis";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private httpService: HttpService, private readonly redisService: RedisService) {
  }


  @Post('bus')
  async getEvent(@Req() req, @Res() res) {
    console.log("recieved request")
    const client = await this.redisService.getClient();
    //SET questions "[{\"questions\":[]}]"
    const category = req.body.category;
    console.log(category)
    if (category == "question") {
      const statistics_subs = await client.hget('subscribers','statistics');
      console.log("stats: "+statistics_subs)
      const answer_subs = await client.hget('subscribers', 'answer-micro');
      console.log("answer"+answer_subs)
      const display_subs = await client.hget('subscribers', 'display');
      console.log("dis: "+display_subs)
     const stat= await this.httpService.post(statistics_subs, {
        id: req.body.id,
        askedFrom: req.body.askedFrom,
        askedOn: req.body.askedOn,
        keywords: req.body.keywords,
      }).toPromise();
      console.log("ok1")

      let ans = await this.httpService.post(answer_subs, { id: req.body.id }).toPromise();
      console.log("ok2")

     let dis= await this.httpService
        .post(display_subs + "/question", {
          id: req.body.id,
          title: req.body.title,
          text: req.body.text,
          askedFrom: req.body.askedFrom,
          askedOn: req.body.askedOn,
          keywords: req.body.keywords,

        })
        .toPromise();
        console.log("ok3")
      res.send("ok")


    } else if (category == "answer") {

      const saved_subs = await client.hget('subscribers', 'display');
      console.log("here: "+saved_subs+"/answer")

      await this.httpService
        .post(saved_subs+"/answer", {
          id: req.body.id,
          text: req.body.text,
          answeredFrom: req.body.answeredFrom,
          answeredOn: req.body.answeredOn,
          isAnAnswerOf: req.body.isAnAnswerOf,

        })
        .toPromise();
      console.log("ok1")
      res.send("ok")

    }
  }
}
