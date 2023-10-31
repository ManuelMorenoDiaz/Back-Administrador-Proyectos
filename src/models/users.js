const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  nombre: {
    type: String,
    maxlength: 40,
    required: true,
  },
  apellido_paterno: {
    type: String,
    maxlength: 40,
    required: true
  },
  apellido_materno: {
    type: String,
    maxlength: 40,
    required: false
  },
  email: {
    type: String,
    maxlength: 200,
    required: true,
    unique: true,
    trim: true //Esto para quitar los espacios
  },
  password: {
    type: String,
    maxlength: 255,
    required: true
  }
},
  {
    timestamps: true //Para verificar fecha de creacion y modificacion
  }
);

module.exports = model('User', userSchema);
