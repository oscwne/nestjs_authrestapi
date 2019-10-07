import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../account/services';
import { UserDto } from 'src/account/dtos/user';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    emailOrUsername: string,
    pass: string,
  ): Promise<null | UserDto> {
    const user = await this.usersService.getByEmailOrUserNameAsync(
      emailOrUsername,
    );

    if (!user) {
      return null;
    }

    const validPassword: boolean = await this.usersService.validatePasswordAsync(
      user._id,
      pass,
    );

    if (validPassword) {
      return user;
    }
  }

  login(user: UserDto) {
    const {
      _id: userId,
      firstName,
      lastName,
      email,
      userName,
      verified,
      firstLogin,
    } = user;

    const payload = {
      sub: userId,
      user: { firstName, lastName, email, userName, verified, firstLogin },
    };
    return {
      access_token: this.jwtService.sign(payload),
      user: payload.user,
    };
  }
}
