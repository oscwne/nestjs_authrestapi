import * as mongoose from 'mongoose';

const { Schema } = mongoose;

export const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'El nombre es obligatorio.'],
  },
  lastName: {
    type: String,
    required: [true, 'El apellido es obligatorio.'],
  },
  email: {
    type: String,
    required: [true, 'El email es obligatorio.'],
    unique: true,
  },
  userName: {
    type: String,
    required: [true, 'El nombre de usuario es obligatorio.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria.'],
  },
  verified: {
    type: Boolean,
    default: false,
  },
  firstLogin: {
    type: Boolean,
    default: true,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: 'Role',
  },
  createdOn: Number,
  updatedOn: Number,
});
