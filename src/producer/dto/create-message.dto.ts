import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @IsString({ message: 'Content deve ser uma string' })
  @IsNotEmpty({ message: 'Content não deve estar vazio' })
  content: string;

  @IsString({ message: 'Author deve ser uma string' })
  @IsNotEmpty({ message: 'Author não deve estar vazio' })
  author: string;
}