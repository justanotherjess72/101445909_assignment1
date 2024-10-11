const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('../routes/userRoutes'); 
const employeeRoutes = require('../routes/employeeRoutes'); 
require('dotenv').config(); 

const app = express();


app.use(express.json()); 

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { 
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

// Root route (optional)
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Export the app for Vercel
module.exports = app;
