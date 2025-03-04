import { Injectable } from '@nestjs/common';
import * as config from 'config';

@Injectable()
export class UserService {
  GetAll() {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@doe.com',
        env: config.get('db.host'),
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
