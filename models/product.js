const mongoose = require('mongoose');
// // Define the Product schema
const productSchema = new mongoose.Schema({
    storeId: {
      type: String,
      required: true,
      trim: true
    },

    // Human-readable name of the store
    storeName: {
      type: String,
      required: true,
      trim: true
    },

    // Unique identifier for this specific product
    productId: {
      type: String,
      required: true,
      unique: true, 
      trim: true
    },

    // Display name of the product
    productName: {
      type: String,
      required: true,
      trim: true
    },

    // Product price (must be a non-negative number)
    price: {
      type: Number,
      required: true,
      min: 0
    }
  }, {
    timestamps: true // adds createdAt and updatedAt automatically
  });
// Export the Mongoose model
module.exports = mongoose.model('Product', productSchema);
