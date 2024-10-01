import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { ValidationPipe } from '@nestjs/common';
import { currentUserMiddleware } from './modules/users/middlewares/current-user.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
    
  );

  // Bật CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Địa chỉ của frontend React
    credentials: true, // Nếu cần gửi cookie
  });
  app.useGlobalPipes(new ValidationPipe());
 
await app.listen(3000);

}
bootstrap();
