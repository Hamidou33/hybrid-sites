import { Controller, Post, Get, Body } from '@nestjs/common';
import {UserService} from "../services/user.service";
import {User} from "../interfaces/user.interface";

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
