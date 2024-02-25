const User = require('../models/User');

// Create a new user
const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const newUser = await User.create({ username, email });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single user by ID
const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error getting user by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a user by ID
const updateUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const [updatedRowsCount, updatedRows] = await User.update(req.body, {
      where: { id: userId },
      returning: true,
    });

    if (updatedRowsCount > 0) {
      res.json(updatedRows[0]);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating user by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a user by ID
const deleteUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedRowCount = await User.destroy({
      where: { id: userId },
    });

    if (deletedRowCount > 0) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
