const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const project_taskSchema = new Schema({
  proyecto_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'project',
  },
  tarea_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'task',
  },
  usuario_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
},
{
  timestamps: true //Para verificar fecha de creacion y modificacion
}
);

module.exports = model('Guest', project_taskSchema);
