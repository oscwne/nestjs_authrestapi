import { Connection } from 'mongoose';
import { UserSchema } from '../schemas';
import { USER_MODEL } from '../constants';
import { DB_CONNECTION } from '../../constants';

export const userProvider = [
  {
    provide: USER_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: [DB_CONNECTION],
  },
];
