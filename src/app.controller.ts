import { Body, Controller, Post } from '@nestjs/common';
import { RocketMemberRepository } from './repositories/rocket-member-repositories';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';

/*
  Dentro da classe do controlador, os métodos são decorados com anotações como @Get(), @Post(), @Put(), @Delete().
  Para definir os endpoints da API e especificar qual método será chamado para lidar com cada tipo de requisição HTTP correspondente.

  O controller está dependendo do repositório
*/
@Controller('app')
export class AppController {
  constructor(private RocketMemberRepository: RocketMemberRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    const member = await this.RocketMemberRepository.create(name, memberFunction)

    return member
  }
}
