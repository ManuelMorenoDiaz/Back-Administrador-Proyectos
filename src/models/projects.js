const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const projectSchema = new Schema({

  titulo: {
    type: String,
    maxlength: 80,
    required: true
  },
  fecha_inicio: {
    type: Date,
    required: true
  },
  fecha_fin: {
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

module.exports = model('Project', projectSchema);
