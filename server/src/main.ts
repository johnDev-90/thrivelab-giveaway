import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS - Permitir tu frontend
  app.enableCors({
    origin: [
      'http://localhost:3000',      // Next.js dev
      'http://localhost:3001',      // Si cambias el puerto
      'https://tu-dominio.com',     // Producción (cuando despliegues)
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Global prefix (opcional)
  app.setGlobalPrefix('api'); // Todas las rutas empiezan con /api

  // Validación global de DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,           // Elimina propiedades no definidas en DTO
      forbidNonWhitelisted: true, // Lanza error si hay propiedades extra
      transform: true,            // Transforma tipos automáticamente
    }),
  );

  const port = process.env.PORT || 3001;
  await app.listen(port);
  
  console.log(`🚀 Server running on http://localhost:${port}`);
}
bootstrap();