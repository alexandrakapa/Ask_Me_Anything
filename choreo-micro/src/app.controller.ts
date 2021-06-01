import { Controller, Get, HttpService, Post, Req, Res } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private httpService: HttpService,) {}



  @Post('bus')
  async getEvent(@Req() req, @Res() res) {
    //SET messages "[{\"messages\":[]}]"
    const channel = req.body.channel;
    const new_saved = await this.appService.getSomeValue('messages');
    const inbox = new_saved[0].messages;
    inbox.push(req.body.id);
    const new_obj = [
      {
        messages: inbox,
      },
    ];
    await this.appService.setSomeValue( 'messages', new_obj);
    const saved_subs = await this.appService.getSomeValue('subscribers');
    const subscribers = saved_subs[0].subscribers[channel];
    console.log(subscribers);
    for(let i=0; i<subscribers.length;i++){
      await this.httpService
        .post(subscribers[i], { id: req.body.id })
        .toPromise();
    }

    return 'ok';
  }
}
