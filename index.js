const express = require('express');
const app = express();


const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes'); // User management routes
const employeeRoutes = require('./routes/employeeRoutes'); // Employee management routes
const authMiddleware = require('./middleware/auth'); // Auth middleware


app.use(express.json());

// Start the server
const SERVER_PORT = process.env.SERVER_PORT || 3000;
app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`);
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comp3123_assignment1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/v1/user', userRoutes); // User management routes
app.use('/api/v1/emp', employeeRoutes); // Employee management routes

// Sample route to test authentication (optional)
app.get('/api/v1/protected', authMiddleware, (req, res) => {
    res.status(200).json({ message: "You have accessed a protected route!" });
});

