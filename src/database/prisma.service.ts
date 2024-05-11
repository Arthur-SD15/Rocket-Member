import { INestApplication, Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// Para conseguir injetar ele, em outros aquivos da nossa aplicação.
@Injectable()
// Quando o Nest instnciar o PrismaService, vai automaticamente instanciar a conexão com o banco de dados.
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  // Padrão, forçar conexão com o banco de dados
  async onModuleDestroy() {
    await this.$disconnect();
  }

  // Padrão, quando perder a conexão desconectar.
  async enableShutdownHooks(app: INestApplication) {
    app.close().then(() => {
      this.$disconnect();
    });
  }
}