// import { Configenum } from './src/enum/Config.enum';
import { User } from './src/user/user.entity';
import { Profile } from './src/user/profile.entity';
import { Log } from './src/log/logs.entity';
import { Roles } from './src/role/roles.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

export const connectionParams = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3090,
  username: 'root',
  password: 'root',
  database: 'nestdb',
  entities: [User, Profile, Log, Roles],
  synchronize: true,
  logging: ['error'],
} as TypeOrmModuleOptions;


// 使用 DataSource改造我们的ormconfig
export default new DataSource({
  ...connectionParams,
  migrations: ['src/migrations/**'],
  subscribers: [],
} as DataSourceOptions);