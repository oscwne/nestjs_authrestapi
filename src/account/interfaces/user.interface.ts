import { Document } from 'mongoose';
import { IRole } from './role.interface';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  verified: string;
  firstLogin: boolean;
  role: any;
  createdOn: number;
  updatedOn: number;
}
