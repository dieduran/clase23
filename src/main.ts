import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {

  const app = await NestFactory.create(AppModule);


  const options = new DocumentBuilder()
    .setTitle('Ejemplo de API')
    .setDescription('Product API description')
    .setVersion('1.0')
    .addTag('product')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
      
  await app.listen(8080);
}
bootstrap();
