import { Injectable } from '@nestjs/common';
import { User } from "./user.interface";

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  createUser(user: User): User {
    const userId = this.users.length + 1;
    const newUser = { ...user, id: userId };
    this.users.push(newUser);
    return newUser;
  }

  getAllUsers(): User[] {
    return this.users;
  }
}
