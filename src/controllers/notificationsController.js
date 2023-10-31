const Notification = require('../models/notifications.js');

const getNotifications = async (req, res) =>{   
  try {
    const notifications = await Notification.find({
      usuario_id: req.user.id
    });
    res.json(notifications);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNotification = async (req, res) =>{
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification) {
      return res.status(404).json({ message: 'Notificacion no encontrada' });
    }
    res.json(notification);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNotification = async (req, res) => {
  const {usuario_id, proyecto_id, tarea_id, tarea_dep_id, tipo} = req.body;

  try {
    const newNotification = new Notification({
      usuario_id,
      proyecto_id,
      tarea_id,
      tarea_dep_id,
      tipo
    });
    const savedNotification = await newNotification.save();
    res.json(savedNotification);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateNotification = async (req, res) => {
  try {
    const updatedNotification = await Notification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedNotification) {
      return res.status(404).json({ message: 'Notificacion no encontrada' });
    }
    res.json(updatedNotification);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteNotification = async (req, res) => {
  try {
    const deletedNotification = await Notification.findByIdAndDelete(req.params.id);
    if (!deletedNotification) {
      return res.status(404).json({ message: 'Notificacion no encontrada' });
    }
    res.json({ message: 'Notificacion eliminada correctamente' });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getNotifications,
  getNotification,
  createNotification,
  updateNotification,
  deleteNotification
}
