const Guest = require('../models/guests');

const getGuests = async (req, res) => {
  try {
    const guest = await Guest.find({
      usuario_id: req.user.id
    });
    res.json(guest);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getGuest = async (req, res) => {
  try {
    const guest = await Guest.findById(req.params.id);
    if (!guest) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(guest);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createGuest = async (req, res) => {
  const {proyecto_id, tarea_id, usuario_id} = req.body;

  try {
    const newGuest = new Guest({
      proyecto_id,
      tarea_id,
      usuario_id
    });
    const savedGuest = await newGuest.save();
    res.json(savedGuest);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateGuest = async (req, res) => {
  try {
    const updatedGuest = await Guest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedGuest) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(updatedGuest);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteGuest = async (req, res) => {
  try {
    const deletedGuest = await Guest.findByIdAndDelete( req.params.id);
    if (!deletedGuest) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json({ message: 'El usuario fue eliminado correctamente' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getGuests,
  getGuest,
  createGuest,
  updateGuest,
  deleteGuest
}