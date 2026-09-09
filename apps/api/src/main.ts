import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for Next.js web and admin
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001', 'https://leloimetal.com'],
    credentials: true
  });

  // Global prefix
  app.setGlobalPrefix('api');

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: false
    })
  );

  // OpenAPI Swagger Documentation
  const config = new DocumentBuilder()
    .setTitle('LELOI METAL API')
    .setDescription('B2B Aluminium Export Platform & CRM API Engine')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`🚀 LELOI METAL API running on http://localhost:${port}/api`);
  console.log(`📖 Swagger documentation available at http://localhost:${port}/api/docs`);
}

bootstrap();
