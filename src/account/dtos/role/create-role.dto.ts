import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiModelProperty()
  name: string;
  @ApiModelPropertyOptional()
  description: string;
}
