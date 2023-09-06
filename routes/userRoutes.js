const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/register', UserController.register);

router.post('/login', UserController.login);

// router.get('/dashboard', authMiddleware.authenticateUser, UserController.dashboard);

router.post('/addProperty',authMiddleware.authenticateUser, upload.array('propertyImages', 5), UserController.addProperty);

router.get('/property', UserController.property);

module.exports = router;