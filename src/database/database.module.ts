import { Module } from '@nestjs/common';
import { databaseProviders } from './database.prooviders';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
