import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

//#region dtos, interface
import { CreateRoleDto, RoleDto } from '../dtos/role';
import { IRole } from '../interfaces/role.interface';
//#endregion

@Injectable()
export class RolesService {
  constructor(@InjectModel('Role') private readonly roleModel: Model<IRole>) {}

  async getAsync(): Promise<RoleDto[]> {
    return await this.roleModel.find();
  }

  async getByIdAsync(id: string): Promise<RoleDto> {
    return await this.roleModel.findById(id);
  }

  async createAsync(payload: CreateRoleDto): Promise<RoleDto> {
    const role = new this.roleModel(payload);
    return await role.save();
  }
}
