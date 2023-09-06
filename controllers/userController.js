const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Property = require('../models/Property');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Password Incorrect' });
    }

    const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '1d' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Authentication failed' });
  }
};

exports.dashboard = (req, res) => {
    const user = req.user;
    res.status(200).json({ message: 'Welcome to the dashboard', user });
  };

exports.addProperty = async (req, res) => {
  const { propertyName, propertyDescription, propertySummary, propertyType, propertyAddress, ownerName } = req.body;

  // if (!req.files) {
  //   return res.status(400).json({ error: 'Image is required' });
  // }

  const propertyImages = req.files.map((file) => ({
    data: file.buffer,
    contentType: file.mimetype,
  }));

  try {
    const newProperty = new Property({
      propertyName,
      propertyDescription,
      propertySummary,
      propertyType,
      propertyAddress,
      ownerName,
      propertyImages,
    });

    const savedProperty = await newProperty.save();

    // console.log('Property added successfully:', savedProperty);
    res.status(201).json(savedProperty);
  } catch (err) {
    console.error('Error adding property:', err);
    res.status(500).json({ error: 'Failed to add property' });
  }
};

exports.property = async (req,res,next) => {

  const property = await Property.find();
  res.status(200).json(property);

}