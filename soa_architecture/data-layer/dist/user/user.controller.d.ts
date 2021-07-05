import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createQuizDto: CreateUserDto): Promise<UserEntity>;
    cre(): Promise<string>;
    login(user_dets: any): Promise<number>;
}
