import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class GiveAwayDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsOptional()
  instagramHandle: string;

  @IsString({ each: true })
  @IsArray()
  painArea: string[];

  @IsString()
  @IsOptional()
  painAreaOther: string;

  @IsString({ each: true })
  @IsNotEmpty()
  whyNotYet: string[];

  @IsString()
  @IsNotEmpty()
  interestLevel: string;
}
