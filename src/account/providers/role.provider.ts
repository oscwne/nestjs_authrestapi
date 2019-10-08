import { Connection } from 'mongoose';
import { RoleSchema } from '../schemas';
import { DB_CONNECTION } from '../../constants';
import { ROLE_MODEL } from '../constants';

export const roleProvider = [
  {
    provide: ROLE_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Role', RoleSchema),
    inject: [DB_CONNECTION],
  },
];
