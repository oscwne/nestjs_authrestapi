import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

//#region dtos and interface
import { IUser } from '../interfaces/user.interface';
import { CreateUserDto, UpdateUserDto, UserDto } from '../dtos/user';
import { USER_MODEL } from '../constants';
//#endregion

@Injectable()
export class UsersService {
  constructor(@Inject(USER_MODEL) private readonly userModel: Model<IUser>) {}

  async getAsync(): Promise<UserDto[]> {
    return this.userModel.find();
  }

  async getByIdAsync(id: string): Promise<UserDto> {
    return this.userModel.findById(id);
  }

  async getByEmailOrUserNameAsync(emailOrUserName: string): Promise<UserDto> {
    const user = await this.userModel.findOne({
      $or: [{ email: emailOrUserName }, { userName: emailOrUserName }],
    });
    return user;
  }

  createAsync(payload: CreateUserDto): Promise<UserDto> {
    payload.createdOn = Date.now();
    payload.password = this.encryptPassword(payload.password);

    const user = new this.userModel(payload);
    return user.save();
  }

  async updateAsync(id: string, payload: UpdateUserDto): Promise<UserDto> {
    payload.updatedOn = Date.now();

    return this.userModel.findByIdAndUpdate(
      id,
      { $set: { ...payload } },
      { new: true },
    );
  }

  async deleteAsync(id: string): Promise<UserDto> {
    return this.userModel.findByIdAndRemove(id);
  }

  private encryptPassword(password: string): string {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  async validatePasswordAsync(id: string, password: string): Promise<boolean> {
    const user = await this.userModel.findById(id);

    if (!user) {
      return null;
    }

    return await bcrypt.compare(password, user.password);
  }
}
