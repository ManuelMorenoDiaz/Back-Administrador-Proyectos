const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const taskSchema = new Schema({

  titulo: {
    type: String,
    maxlength: 80, // Cambie el tamaño de 40 a 80, considerar este cambio en las demas tablas
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  descripcion: {
    type: String,
    maxlength: 500,
    required: true
  },
  estatus: {
    type: String,
    enum: ['Activo', 'Terminado'],
    required: true,
    default: 'Activo'
  }
},
{
  timestamps: true //Para verificar fecha de creacion y modificacion
}
);

module.exports = model('Task', taskSchema);
