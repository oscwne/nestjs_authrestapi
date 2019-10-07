import { ApiModelProperty } from '@nestjs/swagger';
export class RoleDto {
  @ApiModelProperty()
  _id: string;
  @ApiModelProperty()
  name: string;
  @ApiModelProperty()
  description: string;
}
