import { Injectable } from '@nestjs/common';

// 使用dotenv
import * as process from 'node:process';

@Injectable()
export class UserService {
  GetAll() {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@doe.com',
        env: process.env.DB_TYPE,
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane@doe.com',
      },
      {
        id: 3,
        name: 'Jim Doe',
        email: 'jim@doe.com',
      },
    ];
  }
}
