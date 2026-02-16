import { Body, Controller, Post } from '@nestjs/common';
import { GiveawayService } from './giveaway.service.js';
import { GiveAwayDto } from './DTO/giveAway.dto.js';

@Controller('giveaway')
export class GiveawayController {
    constructor(private readonly giveAwayService : GiveawayService){}
    
    @Post()
    requestingFormData(@Body() data : GiveAwayDto){
        
        return this.giveAwayService.createNewform(data)

    }
}
