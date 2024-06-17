import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './user.dto';
import { UserOutput } from './user-output.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<UserOutput>;
    findAllUsers(): Promise<User[]>;
    findOne(username: string): Promise<User>;
}
