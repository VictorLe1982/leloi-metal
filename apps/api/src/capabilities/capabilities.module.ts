import { Module } from '@nestjs/common';
import { CapabilitiesService } from './capabilities.service';
import { CapabilitiesController } from './capabilities.controller';

@Module({
  providers: [CapabilitiesService],
  controllers: [CapabilitiesController],
  exports: [CapabilitiesService]
})
export class CapabilitiesModule {}
