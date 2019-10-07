import { Module } from '@nestjs/common';
import { RolesController, UsersController } from './controllers';
import { RolesService, UsersService } from './services';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleSchema } from './schemas/role.schema';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Role', schema: RoleSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [RolesController, UsersController],
  providers: [RolesService, UsersService],
  exports: [UsersService],
})
export class AccountModule {}
