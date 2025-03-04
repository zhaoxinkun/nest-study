import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { Configenum } from '../../enum/config.enum';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  @Get()
  GetAll() {
    console.log(this.configService.get('DB_HOST'));
    console.log(this.configService.get(Configenum.DB_HOST));
    return this.userService.GetAll();
  }
}
