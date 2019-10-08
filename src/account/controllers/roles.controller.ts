import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { RolesService } from '../services';
import { RoleDto, CreateRoleDto } from '../dtos/role';
import {
  ApiUseTags,
  ApiProduces,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { FilterResult } from '../../filters';
import { AuthGuard } from '@nestjs/passport';

@ApiBearerAuth()
@ApiUseTags('Account')
@UseGuards(AuthGuard())
@ApiProduces('application/json')
@Controller('api/v1/account/roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  @ApiOkResponse({ description: 'Ok', type: RoleDto })
  Get(): Promise<RoleDto[]> {
    return this.rolesService.getAsync();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Ok', type: RoleDto })
  GetById(@Param('id') id: string): Promise<RoleDto> {
    return this.rolesService.getByIdAsync(id);
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({ description: 'Created', type: RoleDto })
  @ApiBadRequestResponse({ description: 'Bad Request', type: FilterResult })
  Create(@Body() payload: CreateRoleDto): Promise<RoleDto> {
    return this.rolesService.createAsync(payload);
  }
}
