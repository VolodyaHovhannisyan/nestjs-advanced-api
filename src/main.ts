import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "./pipes/validation.pipe";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Advanced NestJS")
    .setDescription("REST API docs")
    .setVersion("1.0.1")
    .addTag("Johnson")
    .build();
  
  const document = SwaggerModule.createDocument(app, config)  
  SwaggerModule.setup('/api/docs', app, document)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () =>
    console.log(
      `Server runs on port ${PORT} and env is ${process.env.NODE_ENV}`
    )
  );
}

start();
