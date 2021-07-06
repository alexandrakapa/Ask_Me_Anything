import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager } from 'typeorm';
import { UserEntity } from './entities/user.entity';
export declare class UserService {
    private manager;
    constructor(manager: EntityManager);
    create(CreateUserDto: any): Promise<UserEntity>;
    findOne(userName: string): Promise<UserEntity | undefined>;
    validate(userName: string, passWord: string): Promise<number>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
