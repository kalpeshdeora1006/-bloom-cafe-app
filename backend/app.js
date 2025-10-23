const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const orderRoutes = require('./routes/order');
const authRoutes = require('./routes/auth');

app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;

