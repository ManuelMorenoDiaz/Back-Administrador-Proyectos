const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const project_taskSchema = new Schema({
  proyecto_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'project',
    required: true
  },
  titulo: {
    type: String,
    maxlength: 80,
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
    enum: ['Por hacer', 'En progreso', 'Hecho'],
    required: true,
    default: 'Por hacer'
  }
},
{
  timestamps: true //Para verificar fecha de creacion y modificacion
}
);

module.exports = model('Dependent_tasks', project_taskSchema);
