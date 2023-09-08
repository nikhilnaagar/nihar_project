const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.post('/register', UserController.register);

router.post('/login', UserController.login);

// router.get('/dashboard', authMiddleware.authenticateUser, UserController.dashboard);

router.post('/addProperty', authMiddleware.authenticateUser, upload.array('propertyImagesPaths', 5), UserController.addProperty);

router.get('/property', UserController.property);

module.exports = router;