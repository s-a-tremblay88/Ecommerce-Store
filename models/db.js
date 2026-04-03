const mongoose = require('mongoose');
require('dotenv').config();

// Option 1: Choose DB by environment variable
const dbURI = process.env.DB_URI || 'mongodb+srv://trem0417:123456789!@e-commerceproducts.qjkaium.mongodb.net/?appName=E-CommerceProducts';

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});

module.exports = mongoose;