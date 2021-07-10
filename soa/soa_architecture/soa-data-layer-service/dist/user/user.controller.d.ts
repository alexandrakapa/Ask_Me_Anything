import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createQuizDto: CreateUserDto): Promise<string>;
    cre(): Promise<string>;
    login(user_dets: any): Promise<number>;
}
