import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Log } from '../log/logs.entity';
import { Roles } from '../role/roles.entity';

// 创建实体
@Entity()
export class User {
  // PrimaryColumn是创建主键
  // 创建主键,并自动枚举生成就是用PrimaryGeneratedColumn注解
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Log, (log) => log.user)
  logs: Log[];

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  @ManyToMany(() => Roles, (roles) => roles.users)
  @JoinTable({ name: 'user_roles' })
  roles: Roles[];
}