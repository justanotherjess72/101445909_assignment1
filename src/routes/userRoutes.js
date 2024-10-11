const express = require('express');
const userController = require('../controllers/userController'); // Adjust the path as needed

const router = express.Router();

// User signup route
router.post('/signup', userController.signup);

// User login route
router.post('/login', userController.login);

module.exports = router;
