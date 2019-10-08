import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { APP_FILTER } from '@nestjs/core';

import { RolesController, UsersController } from './controllers';
import { RolesService, UsersService } from './services';
import { DatabaseModule } from '../database/database.module';
import { roleProvider, userProvider } from './providers';
import { MongoDbExceptionFilter } from '../filters';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    DatabaseModule,
  ],
  controllers: [RolesController, UsersController],
  providers: [
    RolesService,
    UsersService,
    ...roleProvider,
    ...userProvider,
    {
      provide: APP_FILTER,
      useClass: MongoDbExceptionFilter,
    },
  ],
  exports: [UsersService],
})
export class AccountModule {}
