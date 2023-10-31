const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const notificationSchema = new Schema({
  usuario_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  proyecto_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'project',
    default: null,
  },
  tarea_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'task',
    default: null,
  },
  tarea_dep_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'dependent_tasks',
    default: null,
  },
  tipo: {
    type: String,
    enum: ['Invitacion a proyecto', 'Invitacion a tarea', 'Designacion como responsable', 'Recordatorio de entrega'],
    required: true
  }
},
{
  timestamps: true //Para verificar fecha de creacion y modificacion
}
);

module.exports = model('Notification', notificationSchema);
