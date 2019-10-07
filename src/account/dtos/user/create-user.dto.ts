import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiModelProperty()
  firstName: string;
  @ApiModelProperty()
  lastName: string;
  @ApiModelProperty()
  email: string;
  @ApiModelProperty()
  userName: string;
  @ApiModelProperty()
  password: string;
  @ApiModelProperty()
  role: string;
  createdOn: number;
}
