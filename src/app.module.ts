import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AppController } from './app.controller';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PassportModule, AccountModule, AuthModule, DatabaseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
