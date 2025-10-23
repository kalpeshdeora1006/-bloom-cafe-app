const app = require('./app');
const mongoose = require('mongoose');
const http = require('http');
const socketio = require('socket.io');

// Connect to MongoDB (You must have MongoDB running or use Atlas Cloud connection)
mongoose.connect('mongodb://localhost:27017/bloom-cafe', {
  useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');
  // Real-time order sync events can go here
  socket.on('orderCreated', (order) => {
    io.emit('orderUpdate', order);
  });
});

server.listen(5000, () => {
  console.log('Backend server running on http://localhost:5000');
});

