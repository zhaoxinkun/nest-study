import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 使用dotenv配置环境
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  // HMR
  if (module.hot) {
    module.hot.accept();
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    module.hot.dispose(() => app.close()); //hot报错,安装模块-D @types/webpack-env
  }
}

bootstrap();
