const Task = require('../models/tasks.js');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find(/*{usuario_id: req.user.id}*/);
    res.json(tasks);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json(task);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  const {titulo, fecha, descripcion, estatus} = req.body;

  try {
    const newTask = new Task({
      titulo,
      fecha,
      descripcion,
      estatus
    });
    const savedTask = await newTask.save();
    res.json(savedTask);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json({updatedTask});

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(204).json({ message: 'Tarea no encontrada' });
    }
    res.json({ message: 'Tarea eliminada correctamente' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask
}
