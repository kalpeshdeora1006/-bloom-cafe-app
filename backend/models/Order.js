const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  table: String,
  items: [{ name: String, quantity: Number, price: Number }],
  status: { type: String, enum: ['pending', 'preparing', 'completed', 'billed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Order', OrderSchema);

