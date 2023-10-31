const Dependent_task = require('../models/dependent_tasks.js');

const getDependentTasks = async (req, res) => {
  try {
    const dependent_task = await Dependent_task.find({
    });
    res.json(dependent_task);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDependentTask = async (req, res) => {
  try {
    const dependent_task = await Dependent_task.findById(req.params.id);
    if (!dependent_task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json(dependent_task);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createDependentTask = async (req, res) => {
  const {proyecto_id, usuario_id, titulo, fecha, descripcion, estatus} = req.body;

  try {
    const newDependent_task = new Dependent_task({
      proyecto_id,
      titulo, 
      fecha, 
      descripcion,
      estatus
    });
    const savedDependentTask = await newDependent_task.save();
    res.json(savedDependentTask);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDependentTask = async (req, res) => {
  try {
    const updatedDependent_task = await Dependent_task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDependent_task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json(updatedDependent_task);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDependentTask = async (req, res) => {
  try {
    const deletedDependent_task = await Dependent_task.findByIdAndDelete( req.params.id);
    if (!deletedDependent_task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json({ message: 'Tarea eliminada del proyecto correctamente' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDependentTasks,
  getDependentTask,
  createDependentTask,
  updateDependentTask,
  deleteDependentTask
}