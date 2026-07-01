const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

// Enable Cross-Origin Resource Sharing (CORS) for smooth frontend-backend connection
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}));

app.use(express.json());

// Server status API check
app.get('/api/status', (req, res) => {
    res.json({ status: "healthy", message: "VibeChat Backend Server is fully operational." });
});

// Root route for initial verification on Render hosting
app.get('/', (req, res) => {
    res.send("<h1>VibeChat Backend Server is Running Successfully Live!</h1>");
});

// Socket.io initialization for real-time messaging, voice notes, and typing status
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log(`User connected with Session ID: ${socket.id}`);

    // Triggered when a user enters a private or random chat room
    socket.on('join_room', (roomId) => {
        socket.join(roomId);
        console.log(`User ${socket.id} successfully joined Room ID: ${roomId}`);
    });

    // Real-time instant messaging pipeline
    socket.on('send_message', (data) => {
        socket.to(data.room).emit('receive_message', data);
    });

    // Real-time typing status trigger (e.g., 'Emily is typing...')
    socket.on('typing', (data) => {
        socket.to(data.room).emit('user_typing', { isTyping: data.isTyping, user: data.user });
    });

    // Handle user disconnect instances
    socket.on('disconnect', () => {
        console.log(`User disconnected with Session ID: ${socket.id}`);
    });
});

// Setup hosting port configuration dynamically allocated by Render environment
const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
    console.log(`Server successfully started and active on port ${PORT}`);
});
      
