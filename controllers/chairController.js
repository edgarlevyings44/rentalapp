const Chair = require('../models/Chair');

const createChair = async (req, res) => {
  try {
    const { description, no } = req.body;

    if (!description || !no) {
      return res.status(400).json({ error: 'Description and no are required' });
    }

    const newChair = new Chair({ description, no });
    const savedChair = await newChair.save();
    res.json(savedChair);
    
  } catch (error) {
    res.status(500).json({ error: 'Error saving chairs' });
  }
};

const getAllChairs = async (req, res) => {
  try {
    const chairs = await Chair.find();
    res.json(chairs);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving chairs' });
  }
};

const deleteChair = async (req, res) => {
    try {
      const chairId = req.params.id; // Assuming the chair id is passed as a route parameter
  
      const deletedChair = await Chair.findByIdAndDelete(chairId);
      if (!deletedChair) {
        return res.status(404).json({ error: 'Chair not found' });
      }
  
      res.json({ message: 'Chair deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting chair' });
    }
  };

const updateChair = async (req, res) => {
  try {
    const chairId = req.params.id;
    const { description, no } = req.body;

    if (!description || !no) {
      return res.status(400).json({ error: 'Description and no are required' });
    }

    const updatedChair = await Chair.findByIdAndUpdate(chairId, { description, no }, { new: true });
    if (!updatedChair) {
      return res.status(404).json({ error: 'Chair not found' });
    }

    res.json(updatedChair);
  } catch (error) {
    res.status(500).json({ error: 'Error updating chair' });
  }
};  


module.exports = { createChair, getAllChairs, deleteChair, updateChair };