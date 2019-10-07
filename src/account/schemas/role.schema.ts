import * as mongoose from 'mongoose';

const { Schema } = mongoose;

export const RoleSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio.'],
    unique: true,
  },
  description: {
    type: String,
  },
});
