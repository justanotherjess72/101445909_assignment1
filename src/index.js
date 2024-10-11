const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); 
const employeeRoutes = require('./routes/employeeRoutes'); 
const authMiddleware = require('./middleware/auth'); // Import the auth middleware
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); 

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin@cluster0.fhqxk.mongodb.net/comp3123_assigment1', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// User routes
app.use('/api/v1/user', userRoutes);

// Employee routes
app.use('/api/v1/emp', employeeRoutes);

// Basic error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: false,
        message: "Internal Server Error",
    });
});

// Start the server
const SERVER_PORT = process.env.SERVER_PORT || 3000;
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
});
