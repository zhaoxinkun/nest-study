import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { Configenum } from '../../enum/config.enum';
import { PinoLogger } from 'nestjs-pino';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
    private logger: PinoLogger,
  ) {
    this.logger.setContext(UserController.name);
  }

  @Get()
  GetAll() {
    console.log(this.configService.get('DB_HOST'));
    console.log(this.configService.get(Configenum.DB_HOST));
    return this.userService.GetAll();
  }
}
