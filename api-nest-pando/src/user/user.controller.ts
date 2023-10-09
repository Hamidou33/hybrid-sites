import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "./user.interface";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() user: User): User {
    return this.userService.createUser(user);
  }

  @Get()
  getAllUsers(): User[] {
    return this.userService.getAllUsers();
  }
}
