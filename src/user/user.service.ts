import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  GetAll() {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@doe.com',
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
