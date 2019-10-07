import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';
import { PassportModule } from '@nestjs/passport';

dotenv.config();

@Module({
  imports: [
    PassportModule,
    MongooseModule.forRoot('mongodb://localhost:27017/OralAdvancedDev', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }),
    AccountModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
