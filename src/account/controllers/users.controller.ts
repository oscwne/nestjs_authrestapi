import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiUseTags,
  ApiProduces,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

import { UsersService } from '../services';
import { UserDto, CreateUserDto, UpdateUserDto } from '../dtos/user';
import { FilterResult } from '../../filters';

@ApiUseTags('Account')
@ApiProduces('application/json')
@UseGuards(AuthGuard())
@Controller('api/v1/account/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Ok', type: UserDto })
  get(): Promise<UserDto[]> {
    return this.usersService.getAsync();
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Ok', type: UserDto })
  getById(@Param('id') id: string): Promise<UserDto> {
    return this.usersService.getByIdAsync(id);
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({ description: 'Created', type: UserDto })
  @ApiBadRequestResponse({ description: 'Bad Request', type: FilterResult })
  create(@Body() payload: CreateUserDto): Promise<UserDto> {
    return this.usersService.createAsync(payload);
  }

  @Put(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Ok', type: UserDto })
  @ApiBadRequestResponse({ description: 'Bad Request', type: FilterResult })
  update(
    @Param('id') id: string,
    @Body() payload: UpdateUserDto,
  ): Promise<UserDto> {
    return this.usersService.updateAsync(id, payload);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Ok', type: UserDto })
  @ApiBadRequestResponse({ description: 'Bad Request', type: FilterResult })
  delete(@Param('id') id: string): Promise<UserDto> {
    return this.usersService.deleteAsync(id);
  }
}
