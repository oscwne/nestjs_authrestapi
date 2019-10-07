import { IRole } from 'src/account/interfaces/role.interface';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiModelProperty()
  _id: string;
  @ApiModelProperty()
  firstName: string;
  @ApiModelProperty()
  lastName: string;
  @ApiModelProperty()
  email: string;
  @ApiModelProperty()
  userName: string;
  @ApiModelProperty()
  verified: string;
  @ApiModelProperty()
  firstLogin: boolean;
  @ApiModelProperty()
  role: IRole;
  @ApiModelProperty()
  createdOn: number;
  @ApiModelProperty()
  updatedOn: number;
}
