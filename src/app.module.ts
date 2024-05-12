import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from './database/prisma.service';
import { RocketMemberRepository } from './repositories/rocket-member-repositories';
import { PrismaRocketMemberRepositorie } from './repositories/prisma/prisma-rocket-members-repositories';

@Module({
  imports: [],
  // Esses controllers são como os garçons que lidam com os pedidos dos clientes (as requisições HTTP).
  controllers: [AppController],
  // Providers são os ingredientes que os cozinheiros (serviços) usam para preparar os pratos (processar os dados e tal).
  // O PrismaService fornece uma funcionalidade específica, que é a conexão e manipulação do banco de dados usando o Prisma. 
  // Este serviço pode ser injetado em outros componentes da aplicação, como controladores ou outros serviços, para facilitar o acesso aos dados do banco de dados.
  providers: [PrismaService,
    {
      provide: RocketMemberRepository,
      useClass: PrismaRocketMemberRepositorie,
    }
  ],
})
export class AppModule {}
