require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Route imports
const userRoutes = require('./routes/userRoutes');
const tourRoutes = require('./routes/tourRoutes');
const verificationRoute = require('./routes/verificationRoute'); // Adjust path if necessary
const resendVerificationRoute = require('./routes/resendVerificationRoute');
const contactRoute = require('./routes/contactRoute');
const guideRoutes = require('./routes/guideRoute');


// Environment variables
const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routing setup
app.use('/api/users', userRoutes); // User-related routes
app.use('/api/users', verificationRoute);
app.use('/api/users', resendVerificationRoute);
app.use('/api/tours', tourRoutes); // Tour management routes
app.use('/api/contact', contactRoute); // Contact form route
app.use('/api/guides', guideRoutes);


// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello from CimriTur backend server!');
});

// Server startup
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
