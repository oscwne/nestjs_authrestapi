import { Module } from '@nestjs/common';
import { RolesController, UsersController } from './controllers';
import { RolesService, UsersService } from './services';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleSchema } from './schemas/role.schema';
import { UserSchema } from './schemas/user.schema';
import { DatabaseModule } from '../database/database.module';
import { roleProvider, userProvider } from './providers';

@Module({
  imports: [
    DatabaseModule,
    /*     MongooseModule.forFeature([
      { name: 'Role', schema: RoleSchema },
      { name: 'User', schema: UserSchema },
    ]), */
  ],
  controllers: [RolesController, UsersController],
  providers: [RolesService, UsersService, ...roleProvider, ...userProvider],
  exports: [UsersService],
})
export class AccountModule {}
