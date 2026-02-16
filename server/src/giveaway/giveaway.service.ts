import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { GiveAwayDto } from './DTO/giveAway.dto.js';

@Injectable()
export class GiveawayService {
    constructor(private readonly prisma : PrismaService){}

    async createNewform(data : GiveAwayDto){
        
        const emailExist = await this.prisma.formData.findUnique({where:{email:data.email}});
        if (emailExist) throw new ConflictException('You have already entered this giveaway.');

        return this.prisma.formData.create({
            data:data
        })
    }
}
