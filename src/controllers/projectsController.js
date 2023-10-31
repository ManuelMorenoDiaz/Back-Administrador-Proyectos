const Project = require('../models/projects.js');

const getProjects = async (req, res) => {   
  try {
      const projects = await Project.find(/*{usuario_id: req.user.id}*/);
      res.json(projects);
    } catch (error) {
      console.error("Error al obtener los proyectos:", error);
      res.status(500).json({ error: error.message });
    }
};


const getProject = async (req, res) =>{
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message }); // Devuelve el mensaje de error.
  }
};

const createProject = async (req, res) => {
  const {titulo, fecha_inicio,fecha_fin, descripcion, estatus} = req.body;

  try {
    const newProject = new Project({
      titulo, 
      fecha_inicio,
      fecha_fin, 
      descripcion, 
      estatus
    });
    const savedProject = await newProject.save();
    res.json(savedProject);
  } catch (error) {
    res.status(500).json({ error: error.message }); // Devuelve el mensaje de error.
  }
};

const updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProject) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: error.message }); // Devuelve el mensaje de error.
  }
};

const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }
    res.json({ message: 'Proyecto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message }); // Devuelve el mensaje de error.
  }
};

module.exports = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject
}
