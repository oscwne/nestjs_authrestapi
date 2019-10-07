import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiModelProperty()
  firstName: string;
  @ApiModelProperty()
  lastName: string;
  @ApiModelProperty()
  email: string;
  @ApiModelProperty()
  userName: string;
  verified: string;
  firstLogin: boolean;
  @ApiModelProperty()
  role: string;
  updatedOn: number;
}
