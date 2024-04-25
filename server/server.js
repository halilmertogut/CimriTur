require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); 
const tourRoutes = require('./routes/tourRoutes');
const verificationRoute = require('./routes/verificationRoute'); // adjust the path as necessary
const resendVerificationRoute = require('./routes/resendVerificationRoute');
const contactRoute = require('./routes/contactRoute'); // Import the new route
const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes); // Using the user routes with a base path
app.use('/api/users', verificationRoute);
app.use('/api/users', resendVerificationRoute);
app.use('/api/tours', tourRoutes);
app.use('/api/contact', contactRoute); // Setup the route for contact form





app.get('/', (req, res) => {
    res.send('Hello from CimriTur backend server!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
