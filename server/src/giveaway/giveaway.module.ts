import { Module } from '@nestjs/common';
import { GiveawayService } from './giveaway.service.js';
import { GiveawayController } from './giveaway.controller.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  providers: [GiveawayService],
  controllers: [GiveawayController],

})
export class GiveawayModule {}
