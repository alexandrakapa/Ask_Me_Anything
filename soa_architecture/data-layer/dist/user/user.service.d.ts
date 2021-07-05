import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager } from 'typeorm';
import { UserEntity } from './entities/user.entity';
export declare class UserService {
    private manager;
    constructor(manager: EntityManager);
    create(CreateUserDto: CreateUserDto): Promise<UserEntity>;
    findOne(userName: string): Promise<UserEntity | undefined>;
    validate(userName: string, passWord: string): Promise<1 | 0>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
