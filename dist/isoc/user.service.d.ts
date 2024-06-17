import { User } from './user.entity';
import { CreateUserDto } from './user.dto';
import { Repository } from 'typeorm';
import { UserOutput } from './user-output.interface';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    create(createUserDto: CreateUserDto): Promise<UserOutput>;
    findOne(username: string): Promise<User | undefined>;
}
