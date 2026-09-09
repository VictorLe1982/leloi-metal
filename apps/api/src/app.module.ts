import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { RfqModule } from './rfq/rfq.module';
import { ProductsModule } from './products/products.module';
import { CapabilitiesModule } from './capabilities/capabilities.module';
import { LeadsModule } from './leads/leads.module';
import { ToolsModule } from './tools/tools.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    RfqModule,
    ProductsModule,
    CapabilitiesModule,
    LeadsModule,
    ToolsModule
  ]
})
export class AppModule {}
