import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './user.dto';
import { UserOutput } from './user-output.interface';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}


    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<UserOutput> {
        return await this.userService.create(createUserDto);
    }

    @Get()
    async findAllUsers(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Get(':username')
    async findOne(@Param('username') username: string): Promise<User> {
      return this.userService.findOne(username);
    }
}
