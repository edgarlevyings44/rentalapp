const express = require('express');
const router = express.Router();
const chairController = require('../controllers/chairController');

router.post('/', chairController.createChair);
router.get('/', chairController.getAllChairs);
router.delete('/:id', chairController.deleteChair);
router.patch('/:id', chairController.updateChair);

module.exports = router;