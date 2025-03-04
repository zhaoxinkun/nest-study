import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

// 使用dotenv
import * as process from 'node:process';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  GetAll() {
    console.log(process.env.DB_TYPE);
    return this.userService.GetAll();
  }
}
