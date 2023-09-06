const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// replace the link with your mongodb atlas link
mongoose.connect('mongodb+srv://root:root@cluster0.h9bfjsa.mongodb.net/project_nihar', { useNewUrlParser: true, useUnifiedTopology: true });

const userRoutes = require('./routes/userRoutes');

app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});