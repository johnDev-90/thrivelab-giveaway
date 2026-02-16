import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module.js';
import { GiveawayModule } from './giveaway/giveaway.module.js'; 
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // ← Hace que esté disponible en toda la app
    }),
    PrismaModule,
    GiveawayModule, 
  ],

})
export class AppModule {}