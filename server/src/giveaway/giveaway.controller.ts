import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { GiveawayService } from './giveaway.service.js';
import { GiveAwayDto } from './DTO/giveAway.dto.js';

@Controller('giveaway')
export class GiveawayController {
  constructor(private readonly giveAwayService: GiveawayService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async requestingFormData(@Body() data: GiveAwayDto) {
    return await this.giveAwayService.createNewform(data);
  }
}
