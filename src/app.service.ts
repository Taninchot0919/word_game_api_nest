import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {}
  getHello(): string {
    return 'Hello World!';
  }

  getHealth(): object {
    return { status: 'Healthy' };
  }

  async getDatabase(): Promise<object> {
    await this.prismaService.word.findFirst();
    return { status: 'Healthy' };
  }
}
