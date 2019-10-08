import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

//#region dtos, interface
import { CreateRoleDto, RoleDto } from '../dtos/role';
import { IRole } from '../interfaces/role.interface';
import { ROLE_MODEL } from '../constants';
//#endregion

@Injectable()
export class RolesService {
  constructor(@Inject(ROLE_MODEL) private readonly roleModel: Model<IRole>) {}

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
